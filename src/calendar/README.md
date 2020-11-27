# Calendar 日历

# 功能示例

## 通用日历面板（默认）

最简单的实例，不需要做任何设置，直接使用。

[Example: Example](./_example/CalendarFull.jsx)

## 初始化的时候指定高亮日期

组件默认高亮“今天”\“当前月份”，使用 defaultValue 属性可以设置这个高亮的日期\月份。

[Example: Example](./_example/CalendarDefaultValue.jsx)

## 月历

组件默认以日历的形式展示，并提供了“月”（日历）\“年”（月历）两种模式切换按钮，在组件外开发者可以通过修改 mode 属性切换模式。

[Example: Example](./_example/CalendarMonth.jsx)

## 指定第一列的星期

组件默认第一列为“周一”，可以通过 firstDayOfWeek 属性设置成其他星期。(只对mode为"month"有效。)

[Example: Example](./_example/CalendarFirstDayOfWeek.jsx)

## 隐藏\显示周末

组件默认是“显示周末”的，并提供了“隐藏周末”按钮，在组件外开发者可以通过 isShowWeekend 属性来设置是否显示周末。

[Example: Example](./_example/CalendarIsShowWeekendDefault.jsx)

## 卡片模式日历

组件默认以“全屏”风格展示，可以通过 theme 属性修改其风格。（卡片风格下部分功能UI不显示，但仍然可以在组件外取控制组件）

[Example: Example](./_example/CalendarCard.jsx)

## 控件相关配置

通过 ```controllerConfig``` 属性，开发者可以对日历组件右上角的组件进行一些个性化的控制（该属性结构比较复杂，详见文档“Calendar Props”中该字段的说明）

[Example: Example](./_example/CalendarControllerConfig.jsx)

# 事件示例

## 各种事件

组件提供提供了一些事件，开发者可以使用这些事件去实现一些更加定制化的功能（详见文档“Calendar Events”的说明）

[Example: Example](./_example/CalendarEvent.jsx)

# 插槽示例

## 头部插槽（组件左上角）

[Example: Example](./_example/CalendarHeader.jsx)

## 单元格插槽-自定义内容

[Example: Example](./_example/CalendarCell.jsx)

## 单元格插槽-追加内容

[Example: Example](./_example/CalendarCellAppend.jsx)

# 组件属性

[Interface: CalendarProps](./Calendar.tsx)

# 组件方法

[Interface: CalendarMethods](./Calendar.tsx)
