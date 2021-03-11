import React, { forwardRef } from 'react';
import classNames from 'classnames';
import noop from '../_util/noop';
import useConfig from '../_util/useConfig';
import { LoadingIcon } from '../icon';

/**
 * 除表格中列出的属性外，支持透传原生 `<button>` 标签支持的属性。
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮类型
   * @default 'default'
   */
  theme?: 'default' | 'primary' | 'danger';

  /**
   * 按钮是否为禁用状态
   * @default false
   */
  disabled?: boolean;

  /**
   * 按钮是否为加载状态
   * @default false
   */
  loading?: boolean;

  /**
   * 图标
   */
  icon?: React.ReactElement;

  /**
   * 按钮大小
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 按钮是否为块级元素
   * @default false
   */
  block?: boolean;

  /**
   * 组件类型
   * @default 'base'
   */
  variant?: 'base' | 'outline' | 'dashed' | 'text';

  /**
   * 按钮是否为幽灵按钮
   * @default 'false'
   */
  ghost?: boolean;
  /** 按钮形状，有三种：方形、圆角方形、圆形 */
  /**
   * 按钮形状，有三种：方形、圆角方形、圆形
   * @default 'square'
   */
  shape?: 'square' | 'round' | 'circle';
}

/**
 * 按钮组件
 */
const Button = forwardRef(
  (
    {
      theme = 'default',
      variant = 'base',
      icon,
      disabled,
      loading,
      size,
      block,
      ghost,
      shape = 'square',
      children,
      className,
      onClick = noop,
      ...buttonProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { classPrefix } = useConfig();

    const hasChildren = typeof children !== 'undefined';

    if (loading) {
      // eslint-disable-next-line no-param-reassign
      icon = <LoadingIcon />;
    }

    return (
      <button
        ref={ref}
        className={classNames(
          className,
          [
            `${classPrefix}-button`,
            `${classPrefix}-button--theme-${theme}`,
            `${classPrefix}-button--variant-${variant}`,
          ],
          {
            [`${classPrefix}-button--icon-only`]: icon && !hasChildren,
            [`${classPrefix}-button--shape-${shape}`]: shape !== 'square',
            [`${classPrefix}-button--ghost`]: ghost,
            [`${classPrefix}-is-loading`]: loading,
            [`${classPrefix}-is-disabled`]: disabled,
            [`${classPrefix}-size-s`]: size === 'small',
            [`${classPrefix}-size-l`]: size === 'large',
            [`${classPrefix}-size-full-width`]: block,
          },
        )}
        onClick={!disabled && !loading ? onClick : undefined}
        disabled={disabled}
        {...buttonProps}
      >
        {icon ? (
          <>
            {icon}
            {hasChildren && <span className={`${classPrefix}-button__text`}>{children}</span>}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
