import React, { HTMLAttributes } from 'react';
import { StyledProps } from '../_type';

/**
 * List 组件支持的属性
 */
export interface ListProps extends StyledProps {
  /**
   * 列表头部
   */
  header?: React.ReactNode;

  /**
   * 列表底部
   */
  footer?: React.ReactNode;

  /**
   * 列表是否正在加载
   */
  loading?: 'loading' | 'load-more';

  /**
   * 列表尺寸
   * @default 'middle'
   */
  size?: 'middle' | 'small' | 'large';

  /**
   * 是否展示分割线
   * @default true
   */
  split?: boolean;

  /**
   * 是否展示斑马纹
   * @default false
   */
  stripe?: boolean;

  /**
   * 设置 action 布局
   * @default horizontal
   */
  actionLayout?: 'horizontal' | 'vertical';

  /**
   * 加载更多函数
   */
  loadMore?: () => void;

  /**
   * 列表滚动时触发的函数
   */
  onScroll?: (event: React.UIEvent<HTMLElement>, context: { scrollTop: number; scrollBottom: number }) => void;

  children?: React.ReactNode;
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 列表操作组，根据 action-layout 的不同, 位置在卡片底部或者最右侧
   */
  action?: React.ReactNode[];

  /**
   * 额外内容, 通常用在 action-layout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧
   */
  extra?: React.ReactNode;
}

export interface ListItemMetaProps {
  /**
   * 列表元素的图标
   */
  avatar?: React.ReactNode;

  /**
   * 列表元素的标题
   */
  title?: React.ReactNode;

  /**
   * 列表元素的描述内容
   */
  description?: React.ReactNode;
}
