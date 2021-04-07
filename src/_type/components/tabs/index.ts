/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-07 17:13:11
 * */

import { TNode, TElement } from '../../common';
import { MouseEvent } from 'react';

export interface TdTabsProps {
  /**
   * 选项卡是否可增加
   * @default false
   */
  addable?: boolean;
  /**
   * 是否禁用选项卡
   * @default false
   */
  disabled?: boolean;
  /**
   * 选项卡位置
   * @default top
   */
  placement?: 'left' | 'top' | 'bottom' | 'right';
  /**
   * 组件尺寸
   * @default medium
   */
  size?: 'medium' | 'large';
  /**
   * 选项卡风格，包含 默认风格 和 卡片风格两种
   * @default normal
   */
  theme?: 'normal' | 'card';
  /**
   * 激活的选项卡值
   */
  value?: TabValue;
  /**
   * 激活的选项卡值，非受控属性
   */
  defaultValue?: TabValue;
  /**
   * 添加选项卡时触发
   */
  onAdd?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 激活的选项卡发生变化时触发
   */
  onChange?: (value: TabValue) => void;
  /**
   * 删除选项卡时触发
   */
  onRemove?: (options: { value: TabValue; index: number; e: MouseEvent<HTMLDivElement> }) => void;
};

export interface TdTabPanelProps {
  /**
   * 用于自定义选项卡导航，同 panel
   */
  default?: TElement;
  /**
   * 是否禁用当前选项卡
   * @default false
   */
  disabled?: boolean;
  /**
   * 选项卡名称，可自定义选项卡导航内容
   */
  label?: TNode;
  /**
   * 用于自定义选项卡面板内容
   */
  panel?: TElement;
  /**
   * 当前选项卡是否允许移除
   * @default false
   */
  removable?: boolean;
  /**
   * 选项卡内容隐藏时是否仍然渲染
   * @default false
   */
  renderOnHide?: boolean;
  /**
   * 选项卡的值，唯一标识
   */
  value?: TabValue;
  /**
   * 点击删除按钮时触发
   */
  onRemove?: (options: { value: TabValue; e: MouseEvent<HTMLDivElement> }) => void;
};

export type TabValue = string | number;
