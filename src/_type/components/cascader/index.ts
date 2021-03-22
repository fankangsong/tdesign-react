/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-03-22 22:15:40
 * */

import { CheckboxProps } from '../../../../src/Checkbox';
import { PopupProps } from '../../../../src/Popup';
import { TreeNodeModel } from '../tree/index';
import { TNode, TreeOptionData, SizeEnum } from '../../common';
import { FocusEvent } from 'react';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 参考 checkbox 组件 API
   */
  checkProps?: CheckboxProps;
  /**
   * 父子节点选中状态不再关联，可各自选中或取消
   * @default false
   */
  checkStrictly?: boolean;
  /**
   * 是否支持清空选项
   * @default false
   */
  clearable?: boolean;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 无匹配选项时的内容
   * @default '暂无数据'
   */
  empty?: TNode;
  /**
   * 是否可搜索，对现有数据进行搜索过滤
   * @default false
   */
  filterable?: boolean;
  /**
   * 用来定义 value / label / children 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * 延迟加载 children 为 true 的子节点
   * @default true
   */
  lazy?: boolean;
  /**
   * 加载子树数据的方法（仅当节点 children 为 true 时生效）
   */
  load?: (node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>;
  /**
   * 是否支持多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 可选项数据源
   * @default []
   */
  options?: Array<CascaderOption>;
  /**
   * 占位符
   * @default 请选择
   */
  placeholder?: string;
  /**
   * 参考 popup 组件 API
   */
  popupProps?: PopupProps;
  /**
   * 输入框中是否显示选中值的完整路径
   * @default false
   */
  showAllLevels?: boolean;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 展开下一层级的方式
   * @default click
   */
  trigger?: 'click' | 'hover';
  /**
   * 选中项的值
   * @default []
   */
  value?: CascaderValue<CascaderOption>;
  /**
   * 选中项的值，非受控属性
   * @default []
   */
  defaultValue?: CascaderValue<CascaderOption>;
  /**
   * 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaft 表示无论什么情况，选中值仅呈现叶子节点
   * @default onlyLeaf
   */
  valueMode?: 'onlyLeaf' | 'parentFirst' | 'all';
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 选中值发生变化时触发。TreeNodeModel 从树组件中导出
   */
  onChange?: (value: CascaderValue<CascaderOption>, context: { node: TreeNodeModel<CascaderOption> }) => void;
  /**
   * 获得焦点时触发
   */
  onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
  /**
   * 在多选模式下，移除选中值时触发
   */
  onRemove?: (value: CascaderValue<CascaderOption>, context: { node: TreeNodeModel<CascaderOption> }) => void;
};

export interface KeysType { value?: string; label?: string; children?: string };

export type CascaderValue<CascaderOption extends TreeOptionData = TreeOptionData> = Array<string | number | CascaderOption>;
