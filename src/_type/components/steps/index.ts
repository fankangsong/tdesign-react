/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-05-31 14:23:12
 * */

import { TNode } from '../../common';

export interface TdStepsProps {
  /**
   * 当前步骤
   */
  current?: string | number;
  /**
   * 步骤条方向，有两种：横向和纵向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 是否禁用点击
   * @default false
   */
  disabled?: boolean;
  /**
   * 步骤条数据列表（作用和 StepItem 效果一样）
   */
  options?: Array<TdStepItemProps>;
  /**
   * 步骤条顺序
   * @default positive
   */
  sequence?: 'positive' | 'reverse';
  /**
   * 步骤状态
   * @default process
   */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /**
   * 步骤条风格
   * @default default
   */
  theme?: 'default' | 'dot';
  /**
   * 当前步骤发生变化时触发
   */
  onChange?: (current: string | number, previous: string | number) => void;
};

export interface TdStepItemProps {
  /**
   * 步骤描述
   */
  content?: TNode;
  /**
   * 显示在步骤描述下方的额外内容，比如：操作项
   */
  extra?: TNode;
  /**
   * 图标，默认显示内置图标，也可以自定义图标
   * @default true
   */
  icon?: TNode;
  /**
   * 当前步骤的状态
   * @default default
   */
  status?: StepStatus;
  /**
   * 标题
   */
  title?: TNode;
  /**
   * 当前步骤值
   */
  value?: string | number;
};

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
