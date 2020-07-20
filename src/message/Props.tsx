import { StyledProps } from '../_type';
/**
 * Message 组件支持的属性。
 *
 * 除表格中列出的属性外，支持透传原生 `<Message>` 标签支持的属性。
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
   * @default "3000"
   */
  duration?: number;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default "false"
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
export interface ConfigProps {
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
   *
   * @default "{}"
   */
  offset?: OffsetProps;
  /**
   * 定义层级
   *
   * @default "6000"
   */
  zIndex?: number;
  /**
   * 显示时间 毫秒
   *
   * @default "3000"
   */
  duration?: number;

  /**
   * 图标 可为ReactNode， 为false时 不显示图标
   *
   * @default "false"
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
   * @default "document.body"
   */
  attach?: React.ReactNode;

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

export interface OffsetProps {
  /**
   * 向左偏移数量，如 30px
   */
  left: string;
  /**
   * 向右偏移数量，如 30px
   */
  right: string;
  /**
   * 向上偏移数量，如 30px
   */
  top: string;
  /**
   * 向下偏移数量，如 30px
   */
  bottom: string;
}
