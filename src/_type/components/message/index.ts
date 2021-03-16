/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { TNode, AttachNode } from '../../common';
import { MouseEvent } from 'react';

export interface TdMessageProps {
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   * @default false
   */
  closeBtn?: TNode;
  /**
   * 用于自定义消息弹出内容
   */
  content?: TNode;
  /**
   * 消息显示时长，单位：毫秒。值为 0 表示永久显示
   * @default 3000
   */
  duration?: number;
  /**
   * 消息提醒前面的图标，可以自定义
   * @default true
   */
  icon?: TNode;
  /**
   * 消息组件风格
   * @default info
   */
  theme?: ThemeList;
  /**
   * 当关闭按钮存在时，用户点击关闭按钮触发
   */
  onClickCloseBtn?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 计时结束后触发
   */
  onDurationEnd?: () => void;
};

export interface MessageOptions extends TdMessageProps {
  /**
   * 指定弹框挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 弹出消息相对于 placement 偏移的位置，示例：{left: '30px'}
   */
  offset?: { left: string; right: string; bottom: string; top: string };
  /**
   * 弹出消息位置
   * @default top
   */
  placement?: PlacementList;
  /**
   * 消息层级
   * @default 5000
   */
  zIndex?: number;
};

export type ThemeList = 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading';

export type PlacementList = 'center' | 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MessageInstance { close: () => void };

export type MessageMethod = (duration: number, message: string | MessageOptions, theme: ThemeList) => Promise<MessageInstance>;

export type MessageInfoOptions = Omit<MessageOptions, 'theme'>;

export type MessageInfoMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageErrorMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageWarningMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageSuccessMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageLoadingMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageQuestionMethod = (duration: number, message: string | MessageInfoOptions) => Promise<MessageInstance>;

export type MessageCloseAllMethod = () => void;