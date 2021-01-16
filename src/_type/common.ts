/** React 特有全局变量 */

import { ReactElement, ReactNode } from 'react';

// TElement 表示 API 只接受传入组件
export type TElement = ReactElement;
// TNode 表示 API 不仅接受传入组件，还接受传入其他的数据类型； TNode<T> 表示 API 会输出参数
export type TNode<T = undefined> = T extends {} ? (props: T) => ReactNode : ReactNode;

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

export interface Styles {
  [css: string]: string | number;
}

export type CSSSelector = string;

export type AttachNode = CSSSelector | (() => Window | HTMLDocument | HTMLElement);
