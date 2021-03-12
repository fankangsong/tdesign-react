/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode, AttachNode } from '../../common';
import { MouseEvent, KeyboardEvent } from 'react';

export interface TdDrawerProps {
  /**
   * 组件是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   * @default false
   */
  closeBtn?: TNode;
  /**
   * 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 TNode 表示自定义底部内容
   * @default true
   */
  footer?: TNode;
  /**
   * 头部内容。值为 true 显示默认头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容
   * @default true
   */
  header?: TNode;
  /**
   * 模态抽屉弹出时长，单位：毫秒
   * @default 3000
   */
  duration?: number;
  /**
   * 展开方式，有两种：直接展示在内容上方 和 推开内容区域
   * @default overlay
   */
  mode?: 'overlay' | 'push';
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 抽屉方向
   * @default right
   */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * 抽屉层级
   * @default 1500
   */
  zIndex?: number;
  /**
   * 抽屉挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default ''
   */
  attach?: AttachNode;
  /**
   * 抽屉关闭时是否销毁节点
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 是否预渲染抽屉内容
   * @default false
   */
  forceRender?: boolean;
  /**
   * 按下 ESC 时是否触发抽屉关闭事件
   * @default true
   */
  closeOnKeydownEsc?: boolean;
  /**
   * 点击蒙层时是否触发抽屉关闭事件
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 尺寸，支持 'small', 'medium', 'large'，'35px', '30%',  '3em' 等。纵向抽屉调整的是抽屉宽度，横向抽屉调整的是抽屉高度
   * @default small
   */
  size?: string;
  /**
   * 关闭事件，抽屉关闭时触发
   */
  onClose?: (context: CloseContext) => void;
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发该事件，同时触发关闭事件
   */
  onClickCloseBtn?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果“取消”按钮存在，点击“取消”按钮时触发，同时触发关闭事件
   */
  onClickCancel?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 按下 ESC 键时触发
   */
  onKeydownEsc?: (e: KeyboardEvent<HTMLDivElement>) => void;
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onClickOverlay?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发
   */
  onClickConfirm?: (e: MouseEvent<HTMLDivElement>) => void;
};

export type EventSource = 'keydownEsc' | 'clickCloseBtn' | 'clickCancel' | 'clickOverlay';

export interface CloseContext { trigger: EventSource; e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> };
