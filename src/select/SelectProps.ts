import React, { ReactElement } from 'react';

/**
 * 表示组件支持通过 className 和 style 进行样式定制
 */
export interface StyledProps {
  /**
   * 组件自定义类名
   */
  className?: string;

  /**
   * 组件自定义样式
   */
  style?: React.CSSProperties;
}

export interface ReactProps {
  children?: React.ReactNode;
}

export interface SelectRef {
  ref?: React.Ref<HTMLDivElement>;
}
/**
 * Select组件属性
 */
export interface SelectProps extends StyledProps, ReactProps {
  /**
   * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据
   */
  value: SelectValue | SelectValue[];

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
  notFoundContent?: () => void | string;

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
   * Select 分组prop
   */
  optionGroup?: OptionGroup[];

  /**
   * 当选择项发生改变时触发
   */
  change?: (value: SelectValue | SelectValue[]) => void;

  /**
   * 当下拉框显示/隐藏时触发
   */
  visibleChange?: (value: boolean) => void;

  /**
   * 多选模式下移除已选项时触发
   */
  remove?: (value: SelectValue) => void;

  /**
   * 点击清空按钮时触发
   */
  clear?: () => void;

  /**
   * 当 input 获得焦点时触发
   */
  focus?: (event?: React.MouseEvent) => void;

  /**
   * 当 input 失去焦点时触发
   */
  blur?: (event?: React.MouseEvent) => void;
}

export type SelectValue = string | number | LabeledValue;

export interface LabeledValue {
  label: string;
  value: string;
}

export interface OptionGroup {
  label?: string;
  options: {
    label: string;
    value: string | number;
  }[];
}

/**
 * Option 组件属性
 */
export interface OptionProps {
  /**
   * 选项的值
   */
  value: string | number;
  /**
   * 选项的标签，若不设置则默认与 value 相同，有 children 先渲染。
   */
  label?: string | number;
  /**
   * 是否禁用该选项
   */
  disabled?: boolean;
}

/**
 * Option 组件属性 （内部）
 */
export interface SelectOption extends StyledProps, OptionProps {
  size?: 'large' | 'default' | 'small';
  multiple?: boolean;
  selectedValue?: SelectValue | SelectValue[];
  onSelect?: (value: string | number, label?: string | number, selected?: boolean) => void;
}

/**
 * Select Popup 组件属性（内部）
 */
export interface PopupProps extends StyledProps, ReactProps {
  width: number;
  height: number;
  value: SelectValue | SelectValue[];
  change?: (value: SelectValue | SelectValue[], label?: string) => void;
  size?: 'large' | 'default' | 'small';
  multiple?: boolean;
  optionGroup?: OptionGroup[];
  classPrefix?: string;
  options?: { label: string; value: string | number }[];
  notFoundContent?: () => void | string;
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
}
