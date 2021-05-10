/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-05-06 16:40:12
 * */

import { TNode, ClassName, Styles, AttachNode } from '../../common';

export interface TdPopupProps {
  /**
   * 制定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 浮层里面的内容
   */
  content?: TNode;
  /**
   * 是否在隐藏的时候销毁浮层
   * @default false
   */
  destroyOnHide?: boolean;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 浮层类名，示例：'name1 name2 name3' 或 ['name1', 'name2'] 或 [{ 'name1': true }]
   */
  overlayClassName?: ClassName;
  /**
   * 浮层样式
   */
  overlayStyle?: Styles;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  /**
   * 是否显示浮层箭头
   * @default false
   */
  showArrow?: boolean;
  /**
   * 触发浮层出现的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus' | 'context-menu' | 'manual';
  /**
   * 是否显示浮层
   * @default false
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 当浮层隐藏或显示时触发
   */
  onVisibleChange?: (visible: boolean) => void;
};
