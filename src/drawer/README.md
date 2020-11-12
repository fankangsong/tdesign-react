# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。

当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象

## 使用示例

### 基本

[Example: 基本使用](./_example/BasicUsageExample.jsx)

### 自定义位置

[Example: 自定义位置](./_example/PlacementUsageExample.jsx)

### 自定义大小

[Example: 自定义大小](./_example/SizeUsageExample.jsx)

### 页脚

[Example: 页脚](./_example/FooterUsageExample.jsx)

### 不显示蒙层

[Example: 不显示蒙层](./_example/NoMaskUsageExample.jsx)

### 预渲染

提前预渲染子元素，查看 forceRender。

[Example: 预渲染](./_example/ForceRenderUsageExample.jsx)

### 关闭时销毁 Drawer 内的子元素

关闭时销毁 Drawer 内的子元素，查看 destroyOnClose。

[Example: 关闭时销毁 Drawer 内的子元素](./_example/DestroyOnCloseUsageExample.jsx)

### push 模式

总共有两种模式，查看 mode。

[Example: push 模式](./_example/ModeUsageExample.jsx)

### 渲染在当前 DOM

渲染在当前 dom 里。自定义容器，查看 attach。

[Example: 页脚](./_example/CurrentDOMUsageExample.jsx)

### push 模式，渲染在当前 DOM

渲染在当前 dom 里。自定义容器，查看 attach，mode。

[Example: 页脚](./_example/CurrentDOMModeUsageExample.jsx)

## 组件属性

[Interface: DrawerProps](Drawer.tsx)
