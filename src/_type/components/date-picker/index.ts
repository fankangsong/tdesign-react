/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-14 16:02:35
 * */

import { FocusEvent, FormEvent } from 'react';

export interface TdDatePickerProps {
  /**
   * 是否允许输入日期
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否显示清楚按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableDate;
  /**
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'YYYY-MM-DD'
   */
  format?: string;
  /**
   * 选择器模式
   * @default month
   */
  mode?: 'year' | 'month' | 'date';
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 预设快捷日期选择，示例：{ '元旦': '2021-01-01', '昨天':  dayjs().subtract(1, 'day').format('YYYY-MM-DD'), '特定日期': () => ['2021-02-01'] }
   */
  presets?: PresetDate;
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 选中值
   */
  value?: DateValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: DateValue;
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (context: { value: DateValue; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateValue) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: { value: DateValue; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值
   */
  onInput?: (context: { input: string; value: DateValue; e: FormEvent<HTMLDivElement> }) => void;
};

export interface TdDateRangePickerProps {
  /**
   * 是否允许输入日期
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否显示清楚按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 是否禁用组件，值为数组表示可分别控制开始日期和结束日期是否禁用
   * @default false
   */
  disabled?: boolean | Array<boolean>;
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableRangeDate;
  /**
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'YYYY-MM-DD'
   */
  format?: string;
  /**
   * 选择器模式
   * @default month
   */
  mode?: 'year' | 'month' | 'date';
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 占位符，值为数组表示可分别为开始日期和结束日期设置占位符
   */
  placeholder?: string | Array<string>;
  /**
   * 预设快捷日期选择，示例：{ '特定日期范围': ['2021-01-01', '2022-01-01'], '本月': [dayjs().startOf('month'), dayjs().endOf('month')] }
   */
  presets?: PresetRange;
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 选中值
   */
  value?: DateRangeValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: DateRangeValue;
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (context: { value: DateRangeValue; partial: Partial; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateRangeValue) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: { value: DateRangeValue; partial: Partial; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值
   */
  onInput?: (context: { input: string; value: DateRangeValue; partial: Partial; e: FormEvent<HTMLDivElement> }) => void;
};

export type DisableDate = Array<DateValue> | DisableDateObj | ((date: string) => boolean);

export interface DisableDateObj { from?: string; to?: string; before?: string; after?: string };

export interface PresetDate { [name: string]: DateValue | (() => DateValue) };

export type DateValue = string | Date;

export type DisableRangeDate = Array<DateValue> | DisableDateObj | ((context: { date: string; partial: Partial }) => boolean);

export type Partial =  'start' | 'end';

export interface PresetRange { [range: string]: DateRange | (() => DateRange)};

export type DateRange = [DateValue, DateValue];

export type DateRangeValue = Array<string | Date> | Array<DateRangeValue>;
