/** React 特有全局变量 */

import { ReactElement, ReactNode, CSSProperties } from 'react';

// TElement 表示 API 只接受传入组件
export type TElement = ReactElement | (() => ReactElement);
// 1. TNode = ReactNode; 2. TNode<T> = (props: T) => ReactNode
export type TNode<T = undefined> = T extends undefined ? ReactNode : (props: T) => ReactNode;

export type AttachNodeReturnValue = HTMLDocument | HTMLElement | Element | Document;
export type AttachNode = CSSSelector | (() => AttachNodeReturnValue);
export type SuperAttachNode = (() => Window) | AttachNode;

export type Styles = CSSProperties;

/** 通用全局变量 */

export type OptionData = {
  label?: string;
  value?: string | number;
} & { [key: string]: any };

export type TreeOptionData = {
  children?: Array<TreeOptionData>;
} & OptionData;

export type SizeEnum = 'small' | 'medium' | 'large';

export type HorizontalAlignEnum = 'left' | 'center' | 'right';

export type VerticalAlignEnum = 'top' | 'middle' | 'bottom';

export type ClassName = { [className: string]: any } | ClassName[] | string;

export type CSSSelector = string;
