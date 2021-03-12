/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

export interface TdDividerProps {
  /**
   * 分隔线类型有两种：水平和垂直
   * @default horizontal
   */
  theme?: 'horizontal' | 'vertical';
  /**
   * 是否虚线（仅在水平分割线有效）
   * @default false
   */
  dashed?: boolean;
  /**
   * 文本位置（仅在水平分割线有效）
   * @default center
   */
  align?: 'left' | 'right' | 'center';
};
