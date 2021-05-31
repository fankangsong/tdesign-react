/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-05-31 14:23:12
 * */

import { InputNumberProps } from '../../../../src/input-number';
import { TooltipProps } from '../../../../src/tooltip';
import { TNode } from '../../common';

export interface TdSliderProps {
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于控制数字输入框组件，值为 false 表示不现实数字输入框；值为 true 表示呈现默认数字输入框；值类型为 Object 表示透传属性到数字输入框组件
   * @default true
   */
  inputNumberProps?: InputNumberProps;
  /**
   * 滑块方向
   * @default horizontal
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * 刻度标记，示例：[0, 10, 40, 200] 或者 (val) => val + '%'
   */
  marks?: Array<number> | TNode<{ value: number }>;
  /**
   * 滑块范围最大值
   */
  max?: number;
  /**
   * 滑块范围最小值
   */
  min?: number;
  /**
   * 双游标滑块
   * @default false
   */
  range?: boolean;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 透传提示组件属性
   */
  tooltipProps?: TooltipProps;
  /**
   * 滑块值
   */
  value?: number | Array<number>;
  /**
   * 滑块值，非受控属性
   */
  defaultValue?: number | Array<number>;
  /**
   * 滑块值变化时触发
   */
  onChange?: () => void;
};
