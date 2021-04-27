/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-27 15:26:16
 * */

import { TNode, SizeEnum } from '../../common';

export interface TdProgressProps {
  /**
   * 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 ['#f00', '#0ff', '#f0f'] 或 { '0%': '#f00', '100%': '#0ff' } 或  { from: '#000', to: '#000' } 等
   * @default ''
   */
  color?: string | Array<string> | Record<string, string>;
  /**
   * 右侧显示进度文字
   * @default true
   */
  label?: TNode;
  /**
   * 进度条百分比
   * @default 0
   */
  percentage?: number;
  /**
   * 进度条尺寸，示例：small/medium/large/240
   * @default 'medium'
   */
  size?: SizeEnum;
  /**
   * 进度条状态
   */
  status?: StatusEnum;
  /**
   * 进度条线宽
   */
  strokeWidth?: string | number;
  /**
   * 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间
   * @default line
   */
  theme?: ThemeEnum;
  /**
   * 进度条未完成部分颜色
   * @default ''
   */
  trackColor?: string;
};

export type StatusEnum = 'success' | 'error' | 'warning' | 'active';

export type ThemeEnum = 'line' | 'plump' | 'circle';
