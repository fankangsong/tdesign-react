/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode, TElement } from '../../common';
import { MouseEvent, TransitionEvent } from 'react';

export interface TdAlertProps {
  /**
   * 内容（子元素）
   */
  message?: TNode;
  /**
   * 标题
   */
  title?: TNode;
  /**
   * 类型
   * @default info
   */
  theme?: 'success' | 'info' | 'warning' | 'error';
  /**
   * 图标
   */
  icon?: TElement;
  /**
   * 跟在告警内容后面的操作区
   */
  operation?: TElement;
  /**
   * 关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮
   * @default false
   */
  close?: TNode;
  /**
   * 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠
   * @default 0
   */
  maxLine?: number;
  /**
   * 告警提示框关闭动画结束后触发
   */
  onClosed?: (context: { e: TransitionEvent<HTMLDivElement> }) => void;
  /**
   * 关闭按钮点击时触发
   */
  onClose?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
};
