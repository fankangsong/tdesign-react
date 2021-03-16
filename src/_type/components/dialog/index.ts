/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { ButtonProps } from '../../../../src/Button';
import { TNode, ClassName, Styles, AttachNode } from '../../common';
import { MouseEvent, KeyboardEvent } from 'react';

export interface TdDialogProps {
  /**
   * 对话框挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default ''
   */
  attach?: AttachNode;
  /**
   * 对话框内容
   * @default ''
   */
  body?: TNode;
  /**
   * 对话框“取消”按钮，可自定义。值为 '' 或 null 则不显示取消按钮
   * @default '取消'
   */
  cancelBtn?: ButtonProps | TNode;
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   * @default false
   */
  closeBtn?: TNode;
  /**
   * 点击蒙层时是否触发抽屉关闭事件
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 按下 ESC 时是否触发抽屉关闭事件
   * @default true
   */
  closeOnKeydownEsc?: boolean;
  /**
   * 对话框“确认”按钮，可自定义。值为 '' 或 null 则不显示确认按钮
   * @default '确认'
   */
  confirmBtn?: ButtonProps | TNode;
  /**
   * 是否在关闭弹框的时候销毁弹框
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 对话框是否可以拖拽（仅在非模态对话框时有效）
   * @default false
   */
  draggable?: boolean;
  /**
   * 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 TNode 表示自定义底部内容
   * @default true
   */
  footer?: TNode;
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容
   * @default true
   */
  header?: TNode;
  /**
   * 对话框类型，有三种：模态对话框、非模态对话框和普通对话框。弹出「模态对话框」时，只能操作对话框里面的内容，不能操作其他内容。弹出「非模态对话框」时，则可以操作页面内所有内容。「普通对话框」是指没有脱离文档流的对话框，可以在这个基础上开发更多的插件
   * @default modal
   */
  mode?: 'modal' | 'modeless' | 'normal';
  /**
   * 对话框位置，内置两种：垂直水平居中显示 和 靠近顶部（top:20%）显示
   * @default top
   */
  placement?: 'top' | 'center';
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 对话框风格
   * @default default
   */
  theme?: 'default' | 'info' | 'warning' | 'error' | 'success';
  /**
   * 用于弹框具体窗口顶部的距离，优先级大于 placement
   */
  top?: string | number;
  /**
   * 控制对话框是否显示
   * @default true
   */
  visible?: boolean;
  /**
   * 控制对话框是否显示，非受控属性
   * @default true
   */
  defaultVisible?: boolean;
  /**
   * 对话框宽度，示例：320, '500px', '80%'
   */
  width?: string | number;
  /**
   * 对话框层级
   * @default 2500
   */
  zIndex?: number;
  /**
   * 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
   */
  onClickCancel?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 点击右上角关闭按钮时触发
   */
  onClickCloseBtn?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发，同时触发关闭事件
   */
  onClickConfirm?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onClickOverlay?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发
   */
  onClose?: (context: CloseContext) => void;
  /**
   * 对话框消失动画效果结束后触发
   */
  onClosed?: () => void;
  /**
   * 按下 ESC 时触发事件
   */
  onKeydownEsc?: (e: KeyboardEvent<HTMLDivElement>) => void;
  /**
   * 对话框弹出动画效果结束后触发
   */
  onOpened?: () => void;
};

export interface DialogOptions extends Omit<TdDialogProps, 'attach'> {
  /**
   * 对话框挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 弹框类名。示例：'name1 name2' 或者 { name: true } 或者 ['className1', { className2: true }]
   */
  className?: ClassName;
  /**
   * 弹框 style 属性
   */
  style?: Styles;
};

export interface DialogInstance {
  /**
   * 销毁弹框
   */
  destroy?: () => void;
  /**
   * 隐藏弹框
   */
  hide?: () => void;
  /**
   * 显示弹框
   */
  show?: () => void;
  /**
   * 更新弹框内容
   */
  update?: (props: DialogOptions) => void;
};

export type EventSource = 'keydownEsc' | 'clickCloseBtn' | 'clickCancel' | 'clickOverlay';

export interface CloseContext { trigger: EventSource; e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> };

export type DialogMethod = (options: DialogOptions) => DialogInstance;

export type DialogConfirmMethod = (options: DialogOptions) => DialogInstance;

export type DialogAlertMethod = (options: Omit<DialogOptions, 'confirmBtn'>) => DialogInstance;