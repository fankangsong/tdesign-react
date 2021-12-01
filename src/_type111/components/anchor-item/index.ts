/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-06-02 17:34:44
 * */

import { TNode } from '../../common';

export interface TdAnchorItemProps {
  /**
   * 锚点链接, 如果是 hash 模式需要加上当前 path
   * @default ''
   */
  href: string;
  /**
   * 锚点文本
   * @default _self
   */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /**
   * 锚点文本
   * @default ''
   */
  title?: TNode;
}
