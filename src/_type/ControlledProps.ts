import { SyntheticEvent } from 'react';

/**
 * 表单受控组件中，输入输出的统一规范
 *
 * - `value` 用于输入组件当前值
 * - `onChange` 用于回调组件最新值
 */
export interface ControlledProps<V, E extends SyntheticEvent = SyntheticEvent> {
  /**
   * 未提供 `value` 的情况下，提供了 `defaultValue`，则可以当做是非受控组件使用
   */
  defaultValue?: V;

  /**
   * 当前值
   */
  value?: V;

  /**
   * 值发生变更时进行回调
   * - `value` 变更的目标值
   * - `event` 此次变更的 React 事件
   */
  onChange?(value: V, event: E): void;
}
