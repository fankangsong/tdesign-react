/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { KeyboardEvent, FocusEvent, FormEvent } from 'react';

export interface TdTextareaProps {
  /**
   * 文本框值
   */
  value?: TextareaValue;
  /**
   * 文本框值，非受控属性
   */
  defaultValue?: TextareaValue;
  /**
   * 是否禁用文本框
   * @default false
   */
  disabled?: boolean;
  /**
   * 文本框是否只读
   * @default false
   */
  readonly?: boolean;
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
   * 输入内容变化时触发
   */
  onChange?: (value: TextareaValue, context?: { e?: FormEvent<HTMLDivElement> }) => void;
  /**
   * 键盘按下时触发
   */
  onKeydown?: (value: TextareaValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 释放键盘时触发
   */
  onKeyup?: (value: TextareaValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 按下字符键时触发（keydown -> keypress -> keyup）
   */
  onKeypress?: (value: TextareaValue, context: { e: KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 获得焦点时触发
   */
  onFocus?: (value: TextareaValue, context: { e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 失去焦点时触发
   */
  onBlur?: (value: TextareaValue, context: { e: FocusEvent<HTMLDivElement> }) => void;
};

export type TextareaValue = string | number;
