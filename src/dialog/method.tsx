import React from 'react';

type getContainerFunc = () => HTMLElement;
interface ModalMethodProps {
  /**
   * 主体class
   * @default -
   */
  class?: string;
  /**
   * 主体样式
   * @default -
   */
  style?: React.CSSProperties;
  /**
   * 对话框场景
   * @default primary
   */
  theme: 'primary' | 'success' | 'warning' | 'error';
  /**
   * 标题
   * @default -
   */
  header?: React.ReactNode | string;
  /**
   * 弹出框body
   * @default -
   */
  body?: React.ReactNode;
  /**
   * 关闭按钮
   * @default <Icon name="close" />
   */
  closeBtn?: React.ReactNode;
  /**
   * 位置
   * @default -
   */
  offset?: {
    top?: string | number;
    left?: string | number;
  };
  /**
   * 宽度
   * @default 520
   */
  width?: string | number;
  /**
   * 是否显示蒙层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 挂载点
   * @default body
   */
  attach?: string | HTMLElement | getContainerFunc | false | null;
  /**
   * 层级
   * @default 2500
   */
  zIndex?: number;
  /**
   * 取消按钮的展示内容
   * @default -
   */
  cancelContent?: boolean | React.ReactNode;
  /**
   * 确认按钮的展示内容
   * @default -
   */
  confirmContent?: React.ReactNode;
  /**
   * 确定按钮 loading
   * @default false
   */
  loading?: boolean;
  /**
   * 关闭触发事件
   * @default () => void
   */
  beforeClose?: (confrim: boolean, options: Omit<ModalMethodProps, 'beforeClose'>, done: () => any) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function method() {}
