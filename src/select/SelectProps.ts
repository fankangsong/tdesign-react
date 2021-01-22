import React, { ReactElement } from 'react';
import { ControlledProps } from '../_type';
import { StyledProps } from '../_type/StyledProps';

/**
 * Select组件属性
 */
export interface SelectProps extends StyledProps, ControlledProps<SelectValue | SelectValue[]> {
  /**
   * 尺寸，大、中（默认）、小，可选值为  large / default / small / 或者不填
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 是否可以清空选项
   */
  clearable?: boolean;

  /**
   * 是否多选
   */
  multiple?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 占位符
   */
  placeholder?: string;

  /**
   * 是否可搜索
   */
  filterable?: boolean;

  /**
   * 自定义搜索方法
   */
  filterMethod?: () => void;

  /**
   * 是否允许用户创建新条目，需配合 filterable 使用
   */
  creatable?: boolean;

  /**
   * 是否为远程搜索
   */
  remote?: boolean;

  /**
   * 远程搜索方法
   */
  remoteMethod?: (text?: string) => void;

  /**
   * 是否正在从远程获取数据
   */
  loading?: boolean;

  /**
   * 远程加载时显示的文字，支持自定义。如加上超链接 TODO
   */
  loadingText?: () => void | string;

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: () => React.ReactNode;

  /**
   * 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value
   */
  labelInValue?: boolean;

  /**
   * 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
   */
  reserveKeyword?: boolean;

  /**
   * 是否有边框 TODO
   */
  bordered?: boolean;

  /**
   * 多选时用户最多可以选择的项目数，为 0 则不限制
   */
  multipleLimit?: number;

  /**
   * 作为 value 唯一标识的键名，绑定值为对象类型时必填 TODO
   */
  valueKey?: string;

  /**
   * 作为 label 唯一标识的键名，绑定值为对象类型时必填 TODO
   */
  labelKey?: string;

  /**
   * 透传给 popup 组件的参数
   */
  popupProps?: any;

  /**
   * border 为 false 时，支持的自定义文本. TODO
   */
  triggerText?: string;

  /**
   * Select 前置图标
   */
  prefixIcon?: () => ReactElement | string;

  /**
   * Select 后置图标
   */
  suffixIcon?: () => ReactElement | string;

  /**
   * 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能
   */
  options?: { label: string; value: string | number }[];

  /**
   * 当下拉框显示/隐藏时触发
   */
  onVisibleChange?: (value: boolean) => void;

  /**
   * 多选模式下移除已选项时触发
   */
  onRemove?: (value: SelectValue) => void;

  /**
   * 点击清空按钮时触发
   */
  onClear?: () => void;

  /**
   * 当 input 获得焦点时触发
   */
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 当 input 失去焦点时触发
   */
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 选项内容
   */
  children?: React.ReactNode;
}

export type SelectValue = string | number | SelectLabeledValue;

export interface SelectLabeledValue {
  value: string | number;
  label: React.ReactNode;
}

export interface SelectOptionGroup {
  label?: React.ReactNode;
}

/**
 * Option 组件属性
 */
export interface SelectOptionProps {
  /**
   * 选项的值
   */
  value: string | number;
  /**
   * 选项的标签，若不设置则默认与 value 相同，有 children 先渲染。
   */
  label?: React.ReactNode;
  /**
   * 是否禁用该选项
   */
  disabled?: boolean;
}

/**
 * Option 组件属性 （内部）
 */
export interface SelectOption extends StyledProps, SelectOptionProps {
  size?: 'large' | 'default' | 'small';
  multiple?: boolean;
  selectedValue?: SelectValue | SelectValue[];
  children: React.ReactNode;
  onSelect?: (
    value: string | number,
    context: { label?: React.ReactNode; selected?: boolean; event: React.MouseEvent },
  ) => void;
}

/**
 * Select Popup 组件属性（内部）
 */
export interface SelectPopupProps extends StyledProps {
  width: number;
  value: SelectValue | SelectValue[];
  onChange?: (
    value: SelectValue | SelectValue[],
    context?: { label?: React.ReactNode; event: React.SyntheticEvent },
  ) => void;
  size?: 'large' | 'default' | 'small';
  multiple?: boolean;
  classPrefix?: string;
  options?: { label: React.ReactNode; value: string | number }[];
  notFoundContent?: () => React.ReactNode;
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
  children?: React.ReactNode;
}
