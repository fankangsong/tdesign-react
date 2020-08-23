import React, {
  useContext,
  forwardRef,
  Ref,
  LabelHTMLAttributes,
  useLayoutEffect,
  MouseEvent,
  createContext,
} from 'react';
import classNames from 'classnames';
import { Combine, ControlledProps } from '../_type';
import callBoth from '../_util/callBoth';
import useConfig from '../_util/useConfig';
import useDefaultValue from '../_util/useDefaultValue';
import useRefAndForward from '../_util/useRefAndForward';

/**
 * `CheckInput` 组件所接收的参数
 */
export interface CheckProps
  extends Combine<
    Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'defaultValue'>,
    ControlledProps<boolean>
  > {
  /**
   * 获取内部 `input` 的引用
   */
  inputRef?: Ref<HTMLInputElement>;

  /**
   * `Checkbox` 的名称，对于 `CheckGroup` 等管理时必传
   */
  name?: string;

  /**
   * 选项类型
   */
  type: 'radio' | 'radio-button' | 'checkbox';

  /**
   * 默认是否已经勾选
   */
  defaultValue?: boolean;

  /**
   * 是否已经勾选
   */
  value?: boolean;

  /**
   * 勾选状态发生变更时回调
   */
  onChange?: (value: boolean, event: MouseEvent<HTMLInputElement>) => void;

  /**
   * 是否半选状态（仅对 `checkbox` 生效）
   * @default false
   */
  indeterminate?: boolean;

  /**
   * 是否可用
   * @default false
   */
  disabled?: boolean;

  /** 点击时触发 */
  onClick?: (event: MouseEvent) => void;
}

/**
 * Check 组件支持使用 CheckContext 进行状态托管
 */
export const CheckContext = createContext<CheckContextValue>(null);

/**
 * 托管 Check 组件的状态，请提供 inject() 方法注入托管好的 props
 */
export interface CheckContextValue {
  inject: (props: CheckProps) => CheckProps;
}

const Check = forwardRef((_props: CheckProps, ref: Ref<HTMLLabelElement>) => {
  const { classPrefix } = useConfig();

  // 支持从 Context 注入
  const context = useContext(CheckContext);
  let props = _props;
  if (context) {
    props = context.inject(_props);
  }

  const {
    value,
    onChange,
    type,
    indeterminate,
    children,
    className,
    disabled = false,
    onClick,
    style,
    inputRef,
    tabIndex,
    ...htmlProps
  } = useDefaultValue(props, false);

  // handle indeterminate
  const [checkInputRef, forwardInputRef] = useRefAndForward(null, inputRef);

  useLayoutEffect(() => {
    if (type === 'checkbox' && checkInputRef.current) {
      checkInputRef.current.indeterminate = indeterminate;
    }
  });

  const labelClassName = classNames(
    `${classPrefix}-${type}`,
    {
      [`${classPrefix}-is-checked`]: value,
      [`${classPrefix}-is-disabled`]: disabled,
      [`${classPrefix}-is-indeterminate`]: indeterminate,
    },
    className,
  );

  const input = (
    <input
      readOnly
      ref={forwardInputRef}
      type={type === 'radio-button' ? 'radio' : type}
      className={`${classPrefix}-${type}__former`}
      checked={value}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={callBoth(
        onClick,
        (event: MouseEvent<HTMLInputElement>) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          onChange(event.currentTarget.checked, event),
        // eslint-disable-next-line function-paren-newline
      )}
    />
  );

  return (
    <label
      ref={ref}
      className={labelClassName}
      style={style}
      {...htmlProps}
      onClick={(event) => event.stopPropagation()}
    >
      {type === 'radio' ? (
        <span className={`${classPrefix}-${type}-wrap`}>
          {input}
          <i className={`${classPrefix}-${type}__dot`} />
        </span>
      ) : (
        input
      )}
      <span className={`${classPrefix}-${type}__input`} />
      <span key="label" className={`${classPrefix}-${type}__label`}>
        {children}
      </span>
    </label>
  );
});

Check.displayName = 'Check';

export default Check;
