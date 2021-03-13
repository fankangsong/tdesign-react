/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode } from '../../common';

export interface TdBadgeProps {
  /**
   * 颜色
   * @default 'red'
   */
  color?: string;
  /**
   * 徽标内容，可以是数字，也可以是文字。如：'new'/3/99+
   */
  content?: TNode;
  /**
   * 是否为红点
   * @default false
   */
  dot?: boolean;
  /**
   * 封顶的数字值
   * @default 99
   */
  maxCount?: number;
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium';
  /**
   * 形状
   * @default circle
   */
  shape?: 'circle' | 'round';
  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  showZero?: boolean;
  /**
   * 设置状态点的位置偏移，格式为 [x, y]
   */
  offset?: Array<string | number>;
};
