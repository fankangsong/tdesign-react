/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { TNode, SizeEnum } from '../../common';

export interface TdRadioProps {
  /**
   * 选中值
   */
  checked?: RadioValue;
  /**
   * 选中值，非受控属性
   */
  defaultChecked?: RadioValue;
  /**
   * 是否为禁用态
   */
  disabled?: boolean;
  /**
   * HTM 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选按钮的值，当该值等于 checked 时，单选按钮呈现选中状态
   */
  value?: RadioValue;
  /**
   * 选中状态变化时触发
   */
  onChange?: (value: RadioValue, context: { e: Event }) => void;
};

export interface TdRadioGroupProps {
  /**
   * 单选组件按钮形式
   * @default outline
   */
  buttonStyle?: 'outline' | 'solid';
  /**
   * 选中的值
   */
  checked?: RadioValue;
  /**
   * 选中的值，非受控属性
   */
  defaultChecked?: RadioValue;
  /**
   * 是否禁用全部子单选框
   * @default false
   */
  disabled?: boolean;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
   */
  options?: Array<RadioOption>;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: RadioValue, context: { e: Event }) => void;
};

export type RadioValue = string | number | boolean;

export type RadioOption = string | number | RadioOptionObj;

export interface RadioOptionObj { label: string | TNode; value: string | number; disabled?: boolean };