/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-23 12:24:49
 * */

import { IsEmailOptions } from 'validator/es/lib/isEmail';
import { IsURLOptions } from 'validator/es/lib/isURL';
import { TNode } from '../../common';
import { FormEvent } from 'react';

export interface TdFormProps<FormData extends Data = Data> {
  /**
   * 是否在表单标签字段右侧显示冒号
   * @default false
   */
  colon?: boolean;
  /**
   * 表单字段标签对齐方式：左对齐、右对齐、顶部对齐
   * @default right
   */
  labelAlign?: 'left' | 'right' | 'top';
  /**
   * 可以整体设置label标签宽度
   */
  labelWidth?: string | number;
  /**
   * 表单布局，有两种方式：纵向布局 和 行内布局
   * @default vertical
   */
  layout?: 'vertical' | 'inline';
  /**
   * 是否阻止表单提交默认事件，即提交后会刷新页面
   * @default true
   */
  preventSubmitDefault?: boolean;
  /**
   * 是否显示必填符号
   * @default true
   */
  requiredMark?: boolean;
  /**
   * 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值
   * @default empty
   */
  resetType?: 'empty' | 'initial';
  /**
   * 表单字段校验规则
   */
  rules?: { [field in keyof FormData]: Array<FormRule> };
  /**
   * 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动
   */
  scrollToFirstError?: 'smooth' | 'auto';
  /**
   * 校验不通过时，是否显示错误提示信息
   * @default true
   */
  showErrorMessage?: boolean;
  /**
   * 表单尺寸
   * @default medium
   */
  size?: 'medium' | 'large';
  /**
   * 校验状态图标
   */
  statusIcon?: boolean | TNode<TdFormItemProps>;
  /**
   * 表单重置时触发
   */
  onReset?: (params: { e: FormEvent<HTMLFormElement> }) => void;
  /**
   * 表单提交时触发
   */
  onSubmit?: (params: { e: FormEvent<HTMLFormElement>; validateResult: FormValidateResult<FormData> }) => void;
};

export interface TdFormItemProps {
  /**
   * label 原生属性
   * @default ''
   */
  for?: string;
  /**
   * 表单项说明内容
   * @default ''
   */
  help?: string;
  /**
   * 表单初始数据，重置时所需初始数据
   */
  initialData?: string | boolean;
  /**
   * 字段标签名称
   * @default ''
   */
  label?: TNode;
  /**
   * 表单字段名称
   * @default ''
   */
  name?: string;
  /**
   * 表单字段校验规则
   * @default []
   */
  rules?: Array<FormRule>;
  /**
   * 校验状态图标。优先级高级 Form 的 statusIcon
   */
  statusIcon?: TNode;
};

export interface FormRule {
  /**
   * 内置校验方法，校验值类型是否为布尔类型
   */
  boolean?: boolean;
  /**
   * 内置校验方法，校验值是否为日期格式
   */
  date?: boolean | IsDateOptions;
  /**
   * 内置校验方法，校验值是否为邮件格式
   */
  email?: boolean | IsEmailOptions;
  /**
   * 内置校验方法，校验值只能为列出的数据。示例，enum: ['primary', 'info', 'warning']
   */
  enum?: Array<string>;
  /**
   * 内置校验方法，校验值是否为身份证号码
   */
  idcard?: boolean;
  /**
   * 内置校验方法，校验值固定长度，如：len: 10 表示值的字符长度只能等于 10 ，中文表示 2 个字符，英文为 1 个字符
   */
  len?: number | boolean;
  /**
   * 内置校验方法，校验值最大长度，如：max: 100 表示值最多不能超过 100 个字符，中文表示 2 个字符，英文为 1 个字符
   */
  max?: number | boolean;
  /**
   * 校验未通过时呈现的错误信息，值为空则不显示
   * @default ''
   */
  message?: string;
  /**
   * 内置校验方法，校验值最小长度，如：min: 10 表示值最多不能少于 10 个字符，中文表示 2 个字符，英文为 1 个字符
   */
  min?: number | boolean;
  /**
   * 内置校验方法，校验值是否为数字（1.2 、 1e5  都算数字）
   */
  number?: boolean;
  /**
   * 内置校验方法，校验值是否符合正则表达式匹配结果
   */
  pattern?: RegExp;
  /**
   * 内置校验方法，校验值是否已经填写。该值为 true，默认显示必填标记
   */
  required?: boolean;
  /**
   * 内置校验方法，校验值是否为手机号码
   */
  telnumber?: boolean;
  /**
   * 校验触发方式
   * @default change
   */
  trigger?: 'change' | 'blur';
  /**
   * 校验未通过时呈现的错误信息类型，有 告警信息提示 和 错误信息提示 两种
   * @default error
   */
  type?: 'error' | 'warning';
  /**
   * 内置校验方法，校验值是否为网络链接地址
   */
  url?: boolean | IsURLOptions;
  /**
   * 自定义校验规则
   */
  validator?: CustomValidator;
};

export interface FormInstance {
  /**
   * 校验（FormInstance 由 React 自行扩展）
   */
  getFieldValue?: () => void;
  /**
   * 校验（FormInstance 由 React 自行扩展）
   */
  setFieldsValue?: () => void;
  /**
   * 校验（FormInstance 由 React 自行扩展）
   */
  validate?: () => void;
};

export type FormValidateResult<T> = boolean | ValidateResult<T>;

export type ValidateResult<T> = { [key in keyof T]: boolean | ErrorList};

export type ErrorList = Array<FormRule>;

export type ValueType = any;

export type Data = { [key: string]: any };

export interface IsDateOptions { format: string; strictMode: boolean; delimiters: string[] };

export type CustomValidator = (val: ValueType) => boolean | Promise<boolean>;
