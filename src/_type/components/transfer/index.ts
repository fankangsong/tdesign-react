/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-12 14:14:24
 * */

import { InputProps } from '../../../../src/Input';
import { PaginationProps, PageInfo } from '../../../../src/Pagination';
import { CheckboxProps } from '../../../../src/Checkbox';
import { TNode } from '../../common';
import { FormEvent } from 'react';

export interface TdTransferProps {
  /**
   * 全量数据
   * @default []
   */
  data?: Array<DataOption>;
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
   * 禁用全部操作：搜索、选中、移动、分页等。[源列表, 目标列表]，示例：[true, false] 或者 true
   * @default false
   */
  disabled?: boolean | Array<boolean>;
  /**
   * 搜索框配置，值为 false 表示不显示搜索框，值为 true 表示显示默认搜索框，值类型为对象，用于透传 Props 到 Input 组件
   * @default false
   */
  search?: SearchOption | Array<SearchOption>;
  /**
   * 穿梭框标题，示例：['源列表', '目标列表']
   * @default []
   */
  title?: A;
  /**
   * 穿梭框可操作方向
   * @default both
   */
  direction?: 'left' | 'right' | 'both';
  /**
   * 方向操作按钮，可自定义
   * @default ['>', '<']
   */
  operation?: A;
  /**
   * 分页配置
   * @default false
   */
  pagination?: P;
  /**
   * 分页配置
   * @default true
   */
  checkAll?: boolean | Array<boolean>;
  /**
   * 穿梭框底部内容
   */
  footer?: A;
  /**
   * 列表为空时呈现的内容
   * @default '暂无数据'
   */
  empty?: EmptyType | Array<EmptyType> | TNode ;
  /**
   * 用来定义 value / label 在 `data` 中对应的字段别名
   * @default { value: 'value', label: 'label' }
   */
  keys?: KeysType;
  /**
   * 目标数据列表排列顺序
   * @default original
   */
  targetSort?: 'original' | 'push' | 'unshift';
  /**
   * 自定义渲染穿梭框节点
   */
  transferItem?: T;
  /**
   * 用于完全自定义穿梭框列表，如：数据为树形结构时
   */
  content?: T;
  /**
   * 用于控制复选框属性
   */
  checkboxProps?: CheckboxProps;
  /**
   * 数据列表发生变化时触发
   */
  onChange?: (targetValue: Array<TransferValue>, params: TargetParams) => void;
  /**
   * 源数据列表或目标数据列表的选中项发生变化时触发
   */
  onCheckedChange?: (options: CheckedOptions) => void;
  /**
   * 列表滚动时触发
   */
  onScroll?: (options: { e: Event; bottomDistance: number; type: TransferListType }) => void;
  /**
   * 搜索时触发
   */
  onSearch?: (options: { query: string; type: TransferListType; trigger: 'input' | 'enter';  e: FormEvent<HTMLDivElement> }) => void;
  /**
   * 分页发生变化时触发
   */
  onPageChange?: (options: { page: PageInfo; type: TransferListType }) => void;
};

export type DataOption = { label?: string; value?: TransferValue; disabled?: boolean } & Record<string, any>;

export type TransferValue = string | number;

export type SearchOption = boolean | InputProps;

export type TitleType = string | TNode;

export type TransferListType = 'source' | 'target';

export type Pagination = boolean | PaginationProps;

export type EmptyType = string | TNode;

export interface KeysType { value?: string; label?: string };

export interface TransferItem { data: DataOption; index: number; type: TransferListType};

export interface ContentType { direction: 'left' | 'right' };

export interface TargetParams { type: TransferListType; movedValue: Array<TransferValue> };

export interface CheckedOptions { checked: Array<TransferValue>; sourceChecked: Array<TransferValue>; targetChecked: Array<TransferValue>; type: TransferListType };
