# Button 按钮

提供标准的按钮交互和样式。

## 使用示例

### 主要按钮

主按钮是用户在整个页面需要关注的优先级最高的操作，或者是我们需要最想要引导用户关注的操作。

[Example: 主要按钮](./_example/PrimaryButton.jsx)

### 次要按钮

在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮。

[Example: 次要按钮](./_example/WeakButton.jsx)

### 支付类按钮

适用于付款类的操作：如充值、续费、付款。跟费用相关的按钮需采用橙色按钮样式，起引导购买作用。

[Example: 支付按钮](./_example/PayButton.jsx)

### 文本按钮与链接按钮

通常出现在表格、标题旁和字段旁等。在形态上和文字链相似，但它通常和其他控件一起出现，目的在于避免界面过于繁琐以及区分出必要的优先级，而文字链通常可以单独存在。

[Example: 文本按钮与链接按钮](./_example/TextButton.jsx)

### 图标按钮

通常出现在表格、标题旁和字段旁等。在形态上和文字链相似，但它通常和其他控件一起出现，目的在于避免界面过于繁琐以及区分出必要的优先级，而文字链通常可以单独存在。

[Example: 图标按钮](./_example/IconButton.jsx)

## 注意 😰

当前 `Button` 组件 `htmlType` 属性未指定默认值，其表现将为 `"submit"`，请注意其在 `<form>` 中的行为。（[相关文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type)）

## 组件属性

[Interface: ButtonProps](./Button.tsx)

