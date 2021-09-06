import React, { forwardRef, ReactNode, useState, useImperativeHandle, useEffect, useRef } from 'react';
import classNames from 'classnames';
import useConfig from '../_util/useConfig';
import { TdFormItemProps, ValueType } from '../_type/components/form';
import CheckCircleFilledIcon from '../icon/icons/CheckCircleFilledIcon';
import CloseCircleFilledIcon from '../icon/icons/CloseCircleFilledIcon';
import ErrorCircleFilledIcon from '../icon/icons/ErrorCircleFilledIcon';
import Checkbox from '../checkbox';
import Tag from '../tag';
import { StyledProps } from '../_type';
import { validate as validateModal, isValueEmpty } from './formModel';
import { useFormContext } from './FormContext';

enum ValidateStatus {
  TO_BE_VALIDATED = 'not',
  SUCCESS = 'success',
  FAIL = 'fail',
}
export interface FormItemProps extends TdFormItemProps, StyledProps {
  // 子节点
  children?: React.ReactNode;
}

const { CheckTag } = Tag;
const CHECKED_TYPE = [Checkbox, CheckTag];

const FormItem = forwardRef<HTMLDivElement, FormItemProps>((props, ref) => {
  const { classPrefix } = useConfig();
  const {
    children,
    label,
    name,
    help,
    statusIcon: statusIconFromProp,
    rules: rulesFromProp,
    initialData = '',
    className,
  } = props;
  const {
    colon,
    requiredMark,
    layout,
    labelAlign,
    labelWidth,
    showErrorMessage,
    resetType,
    rules: rulesFromContext,
    statusIcon: statusIconFromContext,
  } = useFormContext();

  const [errorList, setErrorList] = useState([]);
  const [verifyStatus, setVerifyStatus] = useState(ValidateStatus.TO_BE_VALIDATED);
  const [resetValidating, setResetValidating] = useState(false);
  const [needResetField, setNeedResetField] = useState(false);
  const [formValue, setFormValue] = useState(initialData);

  const innerFormItemsRef = useRef([]);

  const innerRules = (rulesFromContext && rulesFromContext[name]) || rulesFromProp || [];

  const formItemClass = classNames(className, `${classPrefix}-form__item`);
  const formItemLabelClass = classNames(`${classPrefix}-form__label`, `${classPrefix}-form-item__${name}`, {
    [`${classPrefix}-form__label--required`]:
      requiredMark && innerRules.filter((rule: any) => rule.required).length > 0,
    [`${classPrefix}-form__label--colon`]: colon && label,
    [`${classPrefix}-form__label--top`]: labelAlign === 'top' || !labelWidth,
    [`${classPrefix}-form__label--left`]: labelAlign === 'left' && labelWidth,
    [`${classPrefix}-form__label--right`]: labelAlign === 'right' && labelWidth,
  });

  const contentClasses = classNames(`${classPrefix}-form__controls`, {
    [`${classPrefix}-is-success`]: showErrorMessage && verifyStatus === ValidateStatus.SUCCESS,
    [`${classPrefix}-is-warning`]: showErrorMessage && errorList.length && errorList[0].type === 'warning',
    [`${classPrefix}-is-error`]: showErrorMessage && errorList.length && errorList[0].type === 'error',
  });

  let labelStyle = {};
  let contentStyle = {};
  if (labelWidth && labelAlign !== 'top') {
    if (typeof labelWidth === 'number') {
      labelStyle = { width: `${labelWidth}px` };
      contentStyle = { marginLeft: layout !== 'inline' ? `${labelWidth}px` : '' };
    } else {
      labelStyle = { width: labelWidth };
      contentStyle = { marginLeft: layout !== 'inline' ? labelWidth : '' };
    }
  }

  const renderTipsInfo = () => {
    if (!showErrorMessage) return null;
    let helpNode = null;
    if (help) helpNode = <span className={`${classPrefix}-form__help`}>{help}</span>;

    const tipInfo = (errorList.length && errorList[0].message) || '';
    if (tipInfo) {
      return <span className={`${classPrefix}-input__extra`}>{tipInfo}</span>;
    }

    return helpNode;
  };

  const renderSuffixIcon = () => {
    if (statusIconFromProp === false) return null;

    const resultIcon = (iconSlot: ReactNode) => <span className={`${classPrefix}-form__status`}>{iconSlot}</span>;

    const getDefaultIcon = () => {
      const iconMap = {
        success: <CheckCircleFilledIcon size="25px" />,
        error: <CloseCircleFilledIcon size="25px" />,
        warning: <ErrorCircleFilledIcon size="25px" />,
      };
      if (verifyStatus === ValidateStatus.SUCCESS) {
        return resultIcon(iconMap[verifyStatus]);
      }
      if (errorList && errorList[0]) {
        const type = errorList[0].type || 'error';
        return resultIcon(iconMap[type]);
      }
      return null;
    };

    if (React.isValidElement(statusIconFromProp)) {
      return resultIcon(
        React.cloneElement(statusIconFromProp, { style: { color: 'unset' }, ...statusIconFromProp.props }),
      );
    }
    if (statusIconFromContext === true) {
      return getDefaultIcon();
    }
    if (React.isValidElement(statusIconFromContext)) {
      return resultIcon(statusIconFromProp);
    }

    return null;
  };

  function validate() {
    if (innerFormItemsRef.current.length) {
      return innerFormItemsRef.current.map((innerFormItem) => innerFormItem?.validate());
    }
    setResetValidating(true);
    return new Promise((resolve) => {
      validateModal(formValue, innerRules).then((r) => {
        setErrorList(r);
        let nextVerifyStatus = r.length ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
        // 非 require 且值为空 状态置为默认，无校验规则的都为默认
        if ((!innerRules.some((rule) => rule.required) && isValueEmpty(formValue)) || !innerRules.length) {
          nextVerifyStatus = ValidateStatus.TO_BE_VALIDATED;
        }
        setVerifyStatus(nextVerifyStatus);
        resolve({ [name]: !r.length ? true : r });
        if (needResetField) {
          resetHandler();
        }
        setResetValidating(false);
      });
    });
  }

  const isMounted = useRef(null);

  useEffect(() => {
    // 首次渲染不触发校验
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue]);

  function getEmptyValue(): ValueType {
    const type = Object.prototype.toString.call(initialData);
    let emptyValue: ValueType = '';
    if (type === '[object Array]') {
      emptyValue = [];
    }
    if (type === '[object Object]') {
      emptyValue = {};
    }
    return emptyValue;
  }

  function resetField() {
    if (!name) return;
    if (resetType === 'empty') {
      setFormValue(getEmptyValue());
    }
    if (resetType === 'initial') {
      setFormValue(initialData);
    }

    if (resetValidating) {
      setNeedResetField(true);
    } else {
      resetHandler();
    }
  }

  function resetHandler() {
    setNeedResetField(false);
    setErrorList([]);
    setVerifyStatus(ValidateStatus.TO_BE_VALIDATED);
  }

  // 暴露 ref 实例方法
  useImperativeHandle(ref, (): any => ({
    name,
    value: formValue,
    setValue: setFormValue,
    setStatus: setVerifyStatus,
    validate,
    resetField,
  }));

  return (
    <div className={formItemClass} ref={ref}>
      {label && (
        <div className={formItemLabelClass} style={labelStyle}>
          <label htmlFor={props?.for}>{label}</label>
        </div>
      )}
      <div className={contentClasses} style={contentStyle}>
        <div className={`${classPrefix}-form__controls--content`}>
          {React.Children.map(children, (child, index) => {
            let onChangeFromProps = () => ({});
            let ctrlKey = 'value';
            if (React.isValidElement(child)) {
              if (child.type === FormItem) {
                return React.cloneElement(child, {
                  ref: (el) => {
                    if (!el) return;
                    innerFormItemsRef.current[index] = el;
                  },
                });
              }
              if (typeof child.props.onChange === 'function') {
                onChangeFromProps = child.props.onChange;
              }
              if (typeof child.type === 'object') {
                ctrlKey = CHECKED_TYPE.includes(child.type) ? 'checked' : 'value';
              }
              return React.cloneElement(child, {
                ...child.props,
                [ctrlKey]: formValue,
                onChange: (value) => {
                  onChangeFromProps.call(null, value);
                  setFormValue(value);
                },
              });
            }
            return child;
          })}
          {renderSuffixIcon()}
        </div>
        {renderTipsInfo()}
      </div>
    </div>
  );
});

export default FormItem;
