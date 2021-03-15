/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode, TElement, AttachNode } from '../../common';
import { MouseEvent } from 'react';

export interface TdNotificationProps {
  /**
   * 标题
   * @default ''
   */
  title?: string;
  /**
   * 自定义内容
   */
  content?: TNode;
  /**
   * 消息类型
   * @default info
   */
  theme?: ThemeList;
  /**
   * 自定义图标
   */
  icon?: TElement;
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   * @default false
   */
  closeBtn?: TNode;
  /**
   * 用于自定义底部内容
   */
  footer?: TNode;
  /**
   * 消息显示时长，单位：毫秒。值为 0 表示永久显示
   * @default 3000
   */
  duration?: number;
  /**
   * 点击关闭按钮时触发
   */
  onClickCloseBtn?: (e: MouseEvent<HTMLDivElement>) => void;
  /**
   * 计时结束时触发
   */
  onDurationEnd?: () => void;
};

export interface NotificationOptions extends TdNotificationProps {
  /**
   * 消息弹出位置
   * @default top-right
   */
  placement?: PlacementList;
  /**
   * 相对于 placement 的偏移量
   */
  offset?: { left: string; right: string; bottom: string; top: string };
  /**
   * 指定消息通知挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 自定义层级
   * @default 6000
   */
  zIndex?: number;
};

export type ThemeList = 'info' | 'success' | 'warning' | 'error';

export type PlacementList = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface NotificationInstance { close: () => void };

export type NotificationMethod = (theme: ThemeList, options: NotificationOptions) => Promise<NotificationInstance>;

export type NotificationInfoOptions = Omit<NotificationOptions, 'theme'>;

export type NotificationInfoMethod = (options: NotificationInfoOptions) => Promise<NotificationInstance>;

export type NotificationWarningMethod = (options: NotificationInfoOptions) => Promise<NotificationInstance>;

export type NotificationErrorMethod = (options: NotificationInfoOptions) => Promise<NotificationInstance>;

export type NotificationSuccessMethod = (options: NotificationInfoOptions) => Promise<NotificationInstance>;

export type NotificationCloseMethod = (options: Promise<NotificationInstance>) => void;

export type NotificationCloseAllMethod = () => void;
