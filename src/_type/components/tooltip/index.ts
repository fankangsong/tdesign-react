/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { PopupProps } from '../../../../src/Popup';

export interface TdTooltipProps extends PopupProps {
  /**
   * 是否显示小箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 文字提示风格
   * @default default
   */
  theme?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
};
