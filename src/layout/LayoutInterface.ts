import { StyledProps } from '../_type/StyledProps';

/**
 * Layout 组件支持的属性。
 */
export interface LayoutProps extends StyledProps {
  /**
   * 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
   */
  hasSider?: boolean;

  /**
   * 文本内容
   */
  children?: React.ReactNode;
}

export interface SiderProps extends StyledProps {
  /**
   * 宽度
   *
   * @default 232
   */
  width?: number | string;

  /**
   * 文本内容
   */
  children?: React.ReactNode;
}

export interface HeaderProps extends StyledProps {
  /**
   * 文本内容
   */
  children?: React.ReactNode;
}

export interface ContentProps extends StyledProps {
  /**
   * 文本内容
   */
  children?: React.ReactNode;
}

export interface FooterProps extends StyledProps {
  /**
   * 文本内容
   */
  children?: React.ReactNode;
}
