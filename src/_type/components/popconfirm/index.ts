/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-06-02 17:34:44
 * */

import { MouseEvent } from 'react';
import { ButtonProps } from '../../../button';
import { PopupProps } from '../../../popup';
import { TNode, TElement } from '../../common';

export interface TdPopconfirmProps {
  /**
   * 取消按钮
   * @default '取消'
   */
  cancelBtn?: ButtonProps | TNode;
  /**
   * 触发元素，同 triggerElement
   */
  children?: TNode;
  /**
   * 确认按钮
   * @default '确定'
   */
  confirmBtn?: ButtonProps | TNode;
  /**
   * 确认框内容
   */
  content?: TNode;
  /**
   * 确认框图标
   */
  icon?: TElement;
  /**
   * 透传 Popup 组件属性
   */
  popupProps?: PopupProps;
  /**
   * 文字提示风格
   * @default default
   */
  theme?: 'default' | 'warning' | 'danger';
  /**
   * 触发元素
   */
  triggerElement?: TNode;
  /**
   * 是否显示气泡确认框
   */
  visible?: boolean;
  /**
   * 是否显示气泡确认框，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 点击取消按钮时触发
   */
  onCancel?: (options: { e: MouseEvent<HTMLDivElement | HTMLButtonElement> }) => void;
  /**
   * 确认框显示或隐藏时触发
   */
  onChange?: (visible: boolean, context: ChangeContext) => void;
  /**
   * 点击确认按钮时触发
   */
  onConfirm?: (options: { e: MouseEvent<HTMLDivElement | HTMLButtonElement> }) => void;
};

export interface ChangeContext { trigger: TriggerSource; e: MouseEvent<HTMLDivElement> };

export type TriggerSource = 'cancel' | 'confirm';
