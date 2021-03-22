/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-03-22 22:15:40
 * */

import { TNode } from '../../common';

export interface TdCheckboxProps {
  /**
   * 选中值。只有一个复选框时，选中值类型为 Boolean；有多个复选框时，选中值类型为 Array
   */
  checked?: CheckedValue;
  /**
   * 选中值。只有一个复选框时，选中值类型为 Boolean；有多个复选框时，选中值类型为 Array，非受控属性
   */
  defaultChecked?: CheckedValue;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 是否为半选
   * @default false
   */
  indeterminate?: boolean;
  /**
   * HTM 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 复选框的值。checked 类型为数组且包含该值时，复选框呈现为选中状态
   */
  value?: string | number;
  /**
   * 值变化时触发
   */
  onChange?: (checked: CheckedValue, context: { e: Event }) => void;
};

export interface TdCheckboxGroupProps {
  /**
   * 全选复选框
   */
  checkAll?: CheckAll;
  /**
   * 选中值
   * @default []
   */
  checked?: Array<string | number>;
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultChecked?: Array<string | number>;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: string;
  /**
   * 以配置形式设置子元素。当 CheckboxOption 类型为 string 或 number 时，表示 label 和 value 值相同
   * @default []
   */
  options?: Array<CheckboxOption>;
  /**
   * 值变化时触发
   */
  onChange?: (checked: CheckedValue, context: { e: Event }) => void;
};

export type CheckedValue = boolean | Array<string | number>;

export interface CheckAll { label: string | TNode; value: string | number };

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj { label?: string | TNode; value: string | number; disabled?: boolean; name?: string };
