/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-03-29 15:09:18
 * */

import { CheckboxProps } from '../../../../src/checkbox';
import { PaginationProps, PageInfo } from '../../../../src/pagination';
import { InputProps } from '../../../../src/input';
import { TNode } from '../../common';
import { FormEvent } from 'react';

export interface TdTransferProps {
  /**
   * 分页配置
   * @default true
   */
  checkAll?: boolean | Array<boolean>;
  /**
   * 用于控制复选框属性
   */
  checkboxProps?: CheckboxProps;
  /**
   * 源数据列表选中项
   * @default []
   */
  checked?: Array<TransferValue>;
  /**
   * 源数据列表选中项，非受控属性
   * @default []
   */
  defaultChecked?: Array<TransferValue>;
  /**
   * 用于完全自定义穿梭框列表，如：数据为树形结构时
   */
  content?: TNode<ContentType>;
  /**
   * 全量数据
   * @default []
   */
  data?: Array<DataOption>;
  /**
   * 穿梭框可操作方向
   * @default both
   */
  direction?: 'left' | 'right' | 'both';
  /**
   * 禁用全部操作：搜索、选中、移动、分页等。[源列表, 目标列表]，示例：[true, false] 或者 true
   * @default false
   */
  disabled?: boolean | Array<boolean>;
  /**
   * 列表为空时呈现的内容
   * @default '暂无数据'
   */
  empty?: EmptyType | Array<EmptyType> | TNode ;
  /**
   * 穿梭框底部内容
   */
  footer?: Array<string | TNode> | TNode<{ type: TransferListType }>;
  /**
   * 用来定义 value / label 在 `data` 中对应的字段别名
   * @default { value: 'value', label: 'label' }
   */
  keys?: KeysType;
  /**
   * 方向操作按钮，可自定义
   * @default ['>', '<']
   */
  operation?: Array<string | TNode> | TNode<{ direction: 'left' | 'right' }>;
  /**
   * 分页配置
   * @default false
   */
  pagination?: Pagination | Array<Pagination> | TNode<{ type: TransferListType }>;
  /**
   * 搜索框配置，值为 false 表示不显示搜索框，值为 true 表示显示默认搜索框，值类型为对象，用于透传 Props 到 Input 组件
   * @default false
   */
  search?: SearchOption | Array<SearchOption>;
  /**
   * 目标数据列表排列顺序
   * @default original
   */
  targetSort?: 'original' | 'push' | 'unshift';
  /**
   * 目标数据列表数据
   * @default []
   */
  targetValue?: Array<TransferValue>;
  /**
   * 目标数据列表数据，非受控属性
   * @default []
   */
  defaultTargetValue?: Array<TransferValue>;
  /**
   * 穿梭框标题，示例：['源列表', '目标列表']
   * @default []
   */
  title?: Array<TitleType> | TNode<{ type: TransferListType }>;
  /**
   * 自定义渲染穿梭框节点
   */
  transferItem?: TNode<TransferItem>;
  /**
   * 数据列表发生变化时触发
   */
  onChange?: (targetValue: Array<TransferValue>, params: TargetParams) => void;
  /**
   * 源数据列表或目标数据列表的选中项发生变化时触发
   */
  onCheckedChange?: (options: CheckedOptions) => void;
  /**
   * 分页发生变化时触发
   */
  onPageChange?: (options: { page: PageInfo; type: TransferListType }) => void;
  /**
   * 列表滚动时触发
   */
  onScroll?: (options: { e: Event; bottomDistance: number; type: TransferListType }) => void;
  /**
   * 搜索时触发
   */
  onSearch?: (options: { query: string; type: TransferListType; trigger: 'input' | 'enter';  e: FormEvent<HTMLDivElement> }) => void;
};

export interface ContentType { direction: 'left' | 'right' };

export type DataOption = { label?: string; value?: TransferValue; disabled?: boolean } & Record<string, any>;

export type TransferValue = string | number;

export type EmptyType = string | TNode;

export interface KeysType { value?: string; label?: string };

export type Pagination = boolean | PaginationProps;

export type SearchOption = boolean | InputProps;

export type TitleType = string | TNode;

export type TransferListType = 'source' | 'target';

export interface TransferItem { data: DataOption; index: number; type: TransferListType};

export interface TargetParams { type: TransferListType; movedValue: Array<TransferValue> };

export interface CheckedOptions { checked: Array<TransferValue>; sourceChecked: Array<TransferValue>; targetChecked: Array<TransferValue>; type: TransferListType };
