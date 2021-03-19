/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { TNode, TElement } from '../../common';

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
   * 步骤条数据列表（作用和 StepItem 效果一样）
   */
  options?: Array<TdStepItemProps>;
  /**
   * 步骤条顺序
   * @default positive
   */
  sequence?: 'positive' | 'reverse';
  /**
   * 步骤条风格
   * @default default
   */
  theme?: 'default' | 'dot';
  /**
   * null
   */
  onChange?: (current: number, previous: number) => void;
};

export interface TdStepItemProps {
  /**
   * 当前步骤的状态
   * @default default
   */
  status?: StepStatus;
  /**
   * 图标
   */
  icon?: TElement;
  /**
   * 标题
   */
  title?: TNode;
  /**
   * 步骤描述
   */
  content?: TNode;
  /**
   * 显示在步骤描述下方的额外内容，比如：操作项
   */
  extra?: TNode;
  /**
   * 当前步骤值
   */
  value?: string | number;
};

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
