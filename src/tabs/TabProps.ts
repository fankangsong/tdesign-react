import { Combine, StyledProps } from 'src/_type';
export interface TabsProps extends Combine<StyledProps, {}> {
  /**
   * 当前激活 tab 面板的 name
   *
   */
  activeName?: string | number;
  /**
   * 当前激活 tab 面板的 name
   *
   * @default:第一个TabPanel选项
   */
  defaultActiveName?: string | number;
  /**
   * 尺寸，大，中（默认），小，可选值为 large | middle | small
   *
   * @default middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * 禁用
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * 基本形状样式，default，card （预留字段，具体看设计稿
   *
   * @default default
   */
  theme?: string;
  /**
   * 页签的位置
   *
   * @default top
   */
  tabPosition: string;
  /**
   * 页签是否可移除
   *
   * @default false
   */
  closable?: boolean;
  /**
   * 标签是否可增加
   *
   * @default false
   */
  addable?: boolean;
  /**
   * 切换页签回调
   *
   */
  onChange?: (event, activeName) => any;
  /**
   * 增加页签回调
   *
   */
  onAdd?: (event) => any;
  /**
   * 删除页签回调
   *
   */
  onClose?: (event, activeName) => any;
}
