## TDesign (React)

TDesign 是由前端通用 UI 组件库 Oteam 发起，协同公司内有组件库开发经验的同学一起建设的组件库

### 特性

- 前端通用 UI 组件库 Oteam Web 版实现
- 对接前端组件语言规范
- 与其他框架（Vue） API、UI 保持一致
- 支持按需加载

### 安装

目前组件库已发布正式版本，我们仍在快速迭代，增加新组件，注意留意版本变化，组件库现在已发布在 `npm` 外网中，可直接使用 `npm` 安装

#### 单次指定软件源安装

```shell
npm i tdesign-react -S
```

### 使用

#### 默认支持按需引入

```js
import { Button } from 'tdesign-react';
import 'tdesign-react/es/style/index.css'; // 少量公共样式
```

#### 也提供不带样式引入

```js
import { Button } from 'tdesign-react/lib/';
import 'tdesign-react/dist/tdesign.css'; // 如需样式请添加这行
```

#### 更改主题

由于原始样式基于 less 编写，需要自行处理 less 文件的编译（例如安装 less、less-loader）

更多 less 变量定义 [查看这里](https://github.com/TDesignOteam/tdesign-common/blob/main/style/web/_variables.less)

```js
import { Button } from 'tdesign-react/esm/';
import 'tdesign-react/esm/style/index.js'; // 少量公共样式
```

在 vite 中定制主题

```js
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@btn-height-default': '40px',
        },
      },
    },
  },
};
```

在 webpack 中定制主题

```js
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
+         modifyVars: {
+           '@btn-height-default': '40px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
  }],
}
```

### 参与贡献

#### 开发

```bash
git clone https://github.com/TDesignOteam/tdesign-react.git
cd tdesign-react
git submodule init
git submodule update

# 切换子仓库到 develop 分支
cd src/_common
git checkout develop

# 开发预览
cd ..
tnpm i
npm start

# 打开浏览器访问 http://127.0.0.1:15000
```

更多开发指引请参考[开发规范与说明](https://github.com/TDesignOteam/tdesign-react/blob/main/CONTRIBUTING.md)
