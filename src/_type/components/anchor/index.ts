/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-23 12:24:49
 * */

import { SuperAttachNode } from '../../common';
import { MouseEvent } from 'react';

export interface TdAnchorProps {
  /**
   * 固定模式
   * @default false
   */
  affix?: boolean;
  /**
   * 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default () => (() => window)
   */
  attach?: SuperAttachNode;
  /**
   * 锚点区域边界
   * @default 5
   */
  bounds?: number;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 锚点滚动偏移量
   * @default 0
   */
  targetOffset?: number;
  /**
   * 锚点改变时触发
   */
  onChange?: (currentLink: string, prevLink: string) => void;
  /**
   * 锚点被点击时触发
   */
  onClick?: (link: { href: string; title: string },  e: MouseEvent<HTMLDivElement>) => void;
};
