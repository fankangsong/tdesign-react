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
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    activeName: string
  ) => any;
  /**
   * 增加页签回调
   *
   */
  onAdd?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => any;
  /**
   * 删除页签回调
   *
   */
  onClose?: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    activeName: string
  ) => any;
}

export interface TabPanelProps {
  /**
   * 是否强制渲染
   *
   */
  forceRender?: boolean;
  /**
   * tab 的 name
   *
   */
  name: string | number;
  /**
   * tab 的标签
   *
   */
  label: string | number | React.ReactNode;
  /**
   * tab 是否禁用
   *
   */
  disabled?: boolean;
  /**
   * tab 是否可关闭
   *
   */
  closable?: boolean;
  /**
   * tab 是否 active
   *
   */
  active?: boolean;
}
