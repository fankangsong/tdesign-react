/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-22 19:47:40
 * */

import { ButtonProps } from '../../../../src/button';
import { TNode, AttachNode } from '../../common';
import { MouseEvent, KeyboardEvent } from 'react';

export interface TdDrawerProps {
  /**
   * 抽屉挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default ''
   */
  attach?: AttachNode;
  /**
   * 抽屉内容
   */
  body?: TNode;
  /**
   * 对话框“取消”按钮，可自定义。值为 '' 或 null 则不显示取消按钮
   * @default '取消'
   */
  cancelBtn?: FooterButton;
  /**
   * 抽屉内容，同 body
   */
  children?: TNode;
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
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
  confirmBtn?: FooterButton;
  /**
   * 抽屉关闭时是否销毁节点
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 TNode 表示自定义底部内容
   * @default true
   */
  footer?: TNode;
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容
   */
  header?: TNode;
  /**
   * 展开方式，有两种：直接展示在内容上方 和 推开内容区域
   * @default overlay
   */
  mode?: 'overlay' | 'push';
  /**
   * 抽屉方向
   * @default right
   */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示
   * @default false
   */
  showInAttachedElement?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 尺寸，支持 'small', 'medium', 'large'，'35px', '30%',  '3em' 等。纵向抽屉调整的是抽屉宽度，横向抽屉调整的是抽屉高度
   * @default small
   */
  size?: string;
  /**
   * 组件是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * 组件是否可见，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 抽屉层级
   * @default 1500
   */
  zIndex?: number;
  /**
   * 如果“取消”按钮存在，点击“取消”按钮时触发，同时触发关闭事件
   */
  onClickCancel?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发该事件，同时触发关闭事件
   */
  onClickCloseBtn?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发
   */
  onClickConfirm?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onClickOverlay?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 关闭事件，取消按钮点击时、关闭按钮点击时、ESC 按下时、点击蒙层时均会触发
   */
  onClose?: (context: CloseContext) => void;
  /**
   * 按下 ESC 键时触发
   */
  onKeydownEsc?: (e: KeyboardEvent<HTMLDivElement>) => void;
};

export type FooterButton = string | ButtonProps | TNode;

export type EventSource = 'keydownEsc' | 'clickCloseBtn' | 'clickCancel' | 'clickOverlay';

export interface CloseContext { trigger: EventSource; e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> };
