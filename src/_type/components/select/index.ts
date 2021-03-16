/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { PopupProps } from '../../../../src/Popup';
import { TNode, TElement, SizeEnum } from '../../common';
import { MouseEvent, FocusEvent } from 'react';

export interface TdSelectProps<SelectOption extends Options = Options> {
  /**
   * 是否有边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 是否可以清空选项
   * @default false
   */
  clearable?: boolean;
  /**
   * 是否允许用户创建新条目，需配合 filterable 使用
   * @default false
   */
  creatable?: boolean;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 当下拉列表为空时显示的内容
   * @default '无数据'
   */
  empty?: TNode;
  /**
   * 自定义搜索方法，用于判断是否过滤某一项数据
   */
  filter?: (filterWords: string, option: SelectOption) => boolean | Promise<boolean>;
  /**
   * 是否可搜索
   * @default false
   */
  filterable?: boolean;
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   * @default []
   */
  keys?: KeysType;
  /**
   * 是否正在加载数据
   * @default false
   */
  loading?: boolean;
  /**
   * 远程加载时显示的文字，支持自定义。如加上超链接
   * @default '加载中'
   */
  loadingText?: TNode;
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 多选时用户最多可以选择的项目数，值为 0 则不限制
   * @default 0
   */
  multipleLimit?: number;
  /**
   * 数据化配置选项内容
   * @default []
   */
  options?: Array<SelectOption>;
  /**
   * 占位符
   * @default '请选择'
   */
  placeholder?: string;
  /**
   * 透传给 popup 组件的参数
   */
  popupProps?: PopupProps;
  /**
   * 组件前置图标
   */
  prefixIcon?: TElement;
  /**
   * 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
   * @default false
   */
  reserveKeyword?: boolean;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 选中值
   */
  value?: SelectValue | Array<SelectValue>;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: SelectValue | Array<SelectValue>;
  /**
   * 用于控制选中值的类型。假设数据选项为：[{ label: '姓名', value: 'name' }]，value 表示值仅返回数据选项中的 value， object 表示值返回全部数据。
   * @default value
   */
  valueType?: 'value' | 'object';
  /**
   * 当 input 失去焦点时触发
   */
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 选中值变化时触发
   */
  onChange?: () => void;
  /**
   * 点击清除按钮时触发
   */
  onClear?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 当选择新创建的条目时触发
   */
  onCreate?: (value: string | number) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 多选模式下，选中数据被移除时触发
   */
  onRemove?: (options: { value: string | number; data: SelectOption; e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 输入值变化时，触发搜索事件。主要用于远程搜索新数据
   */
  onSearch?: (filterWords: string) => void;
};

export interface TdOptionProps {
  /**
   * 是否禁用该选项
   * @default false
   */
  disabled?: boolean;
  /**
   * 选项描述（若不设置则默认与 value 相同）
   * @default ''
   */
  label?: string;
  /**
   * 选项值
   */
  value?: string | number;
};

export interface TdOptionGroupProps {
  /**
   * 分组别名
   * @default ''
   */
  label?: string;
};

export interface KeysType { value?: string; label?: string };

export type SelectValue = string | number;

export interface Options { label?: string; value?: string | number };