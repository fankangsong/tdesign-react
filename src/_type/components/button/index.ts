/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode, TElement, SizeEnum } from '../../common';

export interface TdButtonProps {
  /**
   * 组件主题风格，默认、主色、危险
   * @default default
   */
  theme?: 'default' | 'primary' | 'danger';
  /**
   * 组件子元素（默认插槽）
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 按钮内部图标，可完全自定义
   */
  icon?: TElement;
  /**
   * 按钮形状，有三种：方形、圆角方形、圆形
   * @default square
   */
  shape?: 'square' | 'round' | 'circle';
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 按钮形式，基础、线框、虚线、文字
   * @default base
   */
  variant?: 'base' | 'outline' | 'dashed' | 'text';
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮内容，同 default
   */
  content?: TNode;
  /**
   * 按钮类型
   * @default button
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * 是否为幽灵按钮
   * @default false
   */
  ghost?: boolean;
};
