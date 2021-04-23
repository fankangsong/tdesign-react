/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-23 12:24:49
 * */

import { TNode, SizeEnum } from '../../common';

export interface TdLoadingProps {
  /**
   * 子元素，同 content
   */
  children?: TNode;
  /**
   * 子元素
   */
  content?: TNode;
  /**
   * 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒
   * @default 0
   */
  delay?: number;
  /**
   * 是否全屏遮罩，遮罩会挂载到 body
   * @default false
   */
  fullscreen?: boolean;
  /**
   * 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符
   * @default true
   */
  indicator?: TNode;
  /**
   * 是否处于加载状态，作为包裹元素时有效
   */
  loading?: boolean;
  /**
   * 是否需要防止滚动穿透
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否需要遮罩层，遮罩层对包裹元素才有效
   * @default false
   */
  showOverlay?: boolean;
  /**
   * 尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 加载提示文案
   */
  text?: TNode;
};

export type LoadingMethod = (options: boolean | TdLoadingProps) => void;
