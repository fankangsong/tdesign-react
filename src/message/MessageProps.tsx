import { StyledProps } from '../_type';

/**
 * Message 组件支持的属性。
 */
export interface MessageProps extends StyledProps {
  /**
   * 按钮类型
   *
   *   - `info` 信息按钮
   *   - `warning` 警告类按钮
   *   - `error` 错误类按钮
   *   - `success` 成功类按钮
   *   - `question` 问题类
   *   - `loading` 加载类
   *
   * @default "info"
   */
  theme?: 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading';

  /**
   * 显示时间 毫秒
   *
   * @default 3000
   */
  duration?: number;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default false
   */
  closeBtn?: boolean | React.ReactNode;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default "info"
   */
  icon?: boolean | React.ReactNode;

  /**
   * 打开动画完成后的触发
   */
  onOpened?: () => void;

  /**
   * 关闭动画完成后的触发
   */
  onClosed?: () => void;

  /**
   * 内部仅触发事件，不处理关闭
   */
  onDurationEnd?: () => void;

  /**
   * 内部仅触发事件，不处理关闭
   */
  onClickCloseBtn?: () => void;

  /**
   * 默认子元素内容
   */
  children: React.ReactNode;
}

export type MessageMethod = (content: React.ReactNode | MessageConfig, duration?: number) => number;

/**
 * Message 组件提供了一些静态方法，使用方式和参数如下
 *
 * Message.info(content, [duration])
 *
 * Message.info(config)
 *
 * Message.success(config)
 *
 * Message.warning(config)
 *
 * Message.error(config)
 *
 * Message.question(config)
 *
 * Message.loading(config)
 */
export interface MessageConfig {
  /**
   * 消息提醒的位置
   * @default "top"
   */
  placement?:
    | 'left'
    | 'left-top'
    | 'top'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom'
    | 'left-bottom';

  /**
   * 偏移量（结合属性placement）, 如： {left: '30px'}，值为String类型
   */
  offset?: OffsetProps;

  /**
   * 定义层级
   *
   * @default 6000
   */
  zIndex?: number;

  /**
   * 显示时间 毫秒
   *
   * @default 3000
   */
  duration?: number;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default false
   */
  closeBtn?: boolean | React.ReactNode;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default "info"
   */
  icon?: boolean | React.ReactNode;

  /**
   * 指定弹窗挂载节点，默认是document下
   *
   * @default document.body
   */
  attach?: HTMLElement;

  /**
   * 打开动画完成后的触发
   */
  onOpened?: () => void;

  /**
   * 关闭动画完成后的触发
   */
  onClosed?: () => void;

  /**
   * duration 到时间后执行的触发 内部仅触发事件，不处理关闭
   */
  onDurationEnd?: (visible: boolean) => void;

  /**
   * 默认子元素内容
   */
  content: React.ReactNode;

  /**
   * 点击关闭按钮触发，内部仅触发事件，不处理关闭
   */
  onClickCloseBtn?: () => void;
}

export interface MessageMethods {
  /**
   * info 主题全局提示
   */
  info?: MessageMethod;
  /**
   * success 主题全局提示
   */
  success?: MessageMethod;
  /**
   * warning 主题全局提示
   */
  warning?: MessageMethod;
  /**
   * error 主题全局提示
   */
  error?: MessageMethod;
  /**
   * question 主题全局提示
   */
  question?: MessageMethod;
  /**
   * loading 主题全局提示
   */
  loading?: MessageMethod;
  /**
   * 关闭指定的全局提示
   */
  close?: (key: number) => void;
  /**
   * 关闭所有全局提示
   */
  closeAll?: () => void;
}

export type OffsetProps = Pick<React.CSSProperties, 'left' | 'top' | 'right' | 'bottom'>;
