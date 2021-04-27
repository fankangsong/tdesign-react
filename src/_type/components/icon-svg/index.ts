/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-04-27 15:26:16
 * */

export interface TdIconSVGProps {
  /**
   * 是否加载组件库内置图标
   * @default true
   */
  loadDefaultIcons?: boolean;
  /**
   * 图标名称
   * @default ''
   */
  name: string;
  /**
   * 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等
   */
  size?: string;
  /**
   * 图标地址，地址内容参考[组件内部默认加载图标](https://tdesign.gtimg.com/icon/web/index.js)
   */
  url?: string | Array<string>;
};
