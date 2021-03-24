/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-03-23 21:32:28
 * */

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
   * 是否支持多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 预设快捷日期选择，示例：{ '本月': [dayjs().startOf('month'), dayjs().endOf('month')] }
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
  value?: DateValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: DateValue;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateValue) => void;
};

export type DisableDate = Array<DateValue> | DisableDateObj | ((date: string) => boolean);

export interface DisableDateObj { from?: string; to?: string; before?: string; after?: string };

export interface PresetRange { [range: string]: [string, string] };

export type DateValue = string | Date;
