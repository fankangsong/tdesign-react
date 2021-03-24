/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-03-22 22:15:40
 * */

import { MouseEvent, FocusEvent } from 'react';

export interface TdTimePickerProps {
  /**
   * 是否允许直接输入时间
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否允许清除选中值
   */
  clearable?: boolean;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 禁用时间项
   */
  disableTime?: (h?: number, m?: number, s?: number) => boolean;
  /**
   * 用于格式化 value，获取格式化后的时间。[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'hh:mm:ss'
   */
  format?: string;
  /**
   * 是否隐藏禁用状态的时间项
   * @default true
   */
  hideDisabledTime?: boolean;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 时间间隔步数，数组排列 [小时, 分钟, 秒]，示例：[2, 1, 1] 或者 ['2', '1', '1']
   * @default [1, 1, 1]
   */
  steps?: Array<string | number>;
  /**
   * 选中值
   */
  value?: TimePickerValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: TimePickerValue;
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: TimePickerValue) => void;
  /**
   * 面板关闭时触发
   */
  onClose?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 面板打开时触发
   */
  onOpen?: (e: MouseEvent<HTMLDivElement>) => void;
};

export type TimePickerValue = string | Date;
