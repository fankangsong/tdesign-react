/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TElement, SizeEnum } from '../../common';
import { MouseEvent, KeyboardEvent, FocusEvent, FormEvent } from 'react';

export interface TdInputProps {
  /**
   * 输入框状态
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * 输入框的值
   */
  value?: InputValue;
  /**
   * 输入框的值，非受控属性
   */
  defaultValue?: InputValue;
  /**
   * 输入框尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;
  /**
   * 前缀图标
   */
  prefixIcon?: TElement;
  /**
   * 后缀图标
   */
  suffixIcon?: TElement;
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;
  /**
   * 输入框是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 是否开启自动填充功能
   * @default false
   */
  autocomplete?: boolean;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 用户最多可以输入的字符个数
   */
  maxlength?: number;
  /**
   * 名称
   * @default ''
   */
  name?: string;
  /**
   * 输入框类型
   * @default text
   */
  type?: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden';
  /**
   * 键盘按下时触发
   */
  onKeydown?: (value: InputValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 释放键盘时触发
   */
  onKeyup?: (value: InputValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 按下字符键时触发（keydown -> keypress -> keyup）
   */
  onKeypress?: (value: InputValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 清空按钮点击时触发
   */
  onClear?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 回车键按下时触发
   */
  onKeydownEnter?: (value: InputValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 输入框值发生变化时触发
   */
  onChange?: (value: InputValue, context?: { e?: FormEvent<HTMLDivElement> | MouseEvent<HTMLDivElement> }) => void;
  /**
   * 获得焦点时触发
   */
  onFocus?: (value: InputValue, context: { e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 失去焦点时触发
   */
  onBlur?: (value: InputValue, context: { e: FocusEvent<HTMLDivElement> }) => void;
};

export type InputValue = string | number;
