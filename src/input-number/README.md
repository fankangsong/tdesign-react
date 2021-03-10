# InputNumber 数字输入框

定义：数字输入框由增加&减少按钮、数值输入组成。每次点击增加按钮（或减少按钮），数字增长（或减少）的量是恒定的。

### 何时使用

适用于连续数值的小范围精确调整，如商品数量、人数等的小范围调整，数字输入框具有优异表现。

连续数值是指一个等差数列：

等差为 1 的数列：1，2，3，4，5，6，7，8，9，10...

等差为 10 的数列：0，10，20，30，40，50，60，70.....

## 1. 组件类型

根据加减按钮和输入框位置，可以将数字输入框分为两类：

### 1.1 输入居中，两侧调整数值

[Example: 基本功能](./_example/center.jsx)

### 1.2 输入居左，右侧调整数值

[Example: 基本功能](./_example/left.jsx)

## 2. 小数

[Example: 基本功能](./_example/step.jsx)

## 3. 格式化展示

[Example: 基本功能](./_example/formatter.jsx)

## 4. 尺寸

[Example: 基本功能](./_example/size.jsx)

## 5. 禁用

[Example: 基本功能](./_example/disabled.jsx)

## 6. 默认值

非受控属性，受控需求请设置 `value` 属性。

[Example: 基本功能](./_example/default.jsx)

