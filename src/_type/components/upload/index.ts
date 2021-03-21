/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * 2021-03-21 17:55:58
 * */

import { TElement } from '../../common';
import { MouseEvent } from 'react';

export interface TdUploadProps {
  /**
   * 接受上传的文件类型，[查看示例](https://www.w3schools.com/tags/att_input_accept.asp)
   * @default ''
   */
  accept?: string;
  /**
   * 上传接口
   * @default ''
   */
  action?: string;
  /**
   * 是否选取文件后自动上传
   * @default false
   */
  autoUpload?: boolean;
  /**
   * 移除文件前的钩子函数，返回值决定是否真正删除。返回 true 表示确认删除，返回 false 表示不删除
   */
  beforeRemove?: (file: File) => boolean | Promise<boolean>;
  /**
   * 上传文件之前的钩子，参数为上传的文件，返回值决定是否上传
   */
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  /**
   * 上传文件时所需的额外数据
   */
  data?: Record<string, any> | ((file: File) => Record<string, any>);
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否启用拖拽上传
   * @default false
   */
  drag?: boolean;
  /**
   * 已上传文件列表
   */
  fileList?: Array<UploadFile>;
  /**
   * 已上传文件列表，非受控属性
   */
  defaultFileList?: Array<UploadFile>;
  /**
   * 文件上传前转换文件数据
   */
  formatFile?: (file: File) => File;
  /**
   * 设置上传的请求头部
   */
  headers?: Record<string, string | number>;
  /**
   * 最多允许上传的文件数
   */
  limit?: number;
  /**
   * 已上传文件列表类型，值为空则不显示
   */
  listType?: 'default' | 'picture';
  /**
   * 上传接口方法
   * @default POST
   */
  method?: 'POST' | 'GET' | 'PUT' | 'OPTION';
  /**
   * 是否支持多选文件
   * @default false
   */
  multiple?: boolean;
  /**
   * 文件上传时的名称
   * @default 'file'
   */
  name?: string;
  /**
   * 触发上传的内容
   */
  trigger?: TElement;
  /**
   * 上传请求时是否携带 cookie
   * @default false
   */
  withCredentials?: boolean;
  /**
   * 已上传文件列表发生变化时触发
   */
  onChange?: (value: Array<UploadFile>) => void;
  /**
   * 上传失败后触发
   */
  onError?: (options: { e: Event; file: UploadFile; fileList: UploadFile[] }) => void;
  /**
   * 点击预览时触发
   */
  onPreview?: (options: { file: UploadFile; e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 上传进度变化时触发
   */
  onProgress?: (options: { e: Event; file: UploadFile; fileList: UploadFile[] }) => void;
  /**
   * 上传成功后触发
   */
  onSuccess?: (options: { e: Event; file: UploadFile; fileList: UploadFile[] }) => void;
};

export interface UploadFile extends File {
  /**
   * 原始文件对象
   */
  file?: File | Blob;
  /**
   * 文件 ID
   * @default ''
   */
  id?: string;
  /**
   * 文件上传进度
   */
  percent?: number;
  /**
   * 文件上传状态
   * @default ''
   */
  status?:  'success' | 'fail' | 'progress';
  /**
   * 文件上传成功后的下载/访问地址
   * @default ''
   */
  url?: string;
};
