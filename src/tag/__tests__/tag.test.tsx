import React from 'react';
import { testExamples, render, getByText, fireEvent } from '@test/utils';
import Tag from '../Tag';
import CheckTag from '../CheckTag';
import ClosableTag from '../_example/delete';

// 测试组件代码 Example 快照
testExamples(__dirname);

describe('Tag 组件测试', () => {
  test('tag 默认的样式和class', async () => {
    const tagTitle = '默认标签';
    const { container } = render(<Tag>{tagTitle}</Tag>);

    // span标签 内容正常显示
    getByText(container, (_, element) => element.tagName.toLowerCase() === 'span');

    // 校验默认className
    const defaultClass = ['t-tag', 't-tag--dark', 't-tag--medium', 't-tag--square'];
    expect(container.firstChild).toHaveClass(...defaultClass);
  });

  test('ClosableTag 点击后关闭按钮', async () => {
    const tagRegExp = /可删除标签/;

    const { queryAllByText, getByText } = render(<ClosableTag></ClosableTag>);
    // 点击i标签后，关闭一个，3个变2个
    expect(queryAllByText(tagRegExp).length).toEqual(3);
    fireEvent.click(getByText('可删除标签0').querySelector('.t-icon-close'));
    expect(queryAllByText(tagRegExp).length).toEqual(2);
  });

  test('Tag  文字超长截断', async () => {
    const tagLabel = '超长省略文本标签超长省略文本标签';

    const { container } = render(<Tag maxWidth={150}>{tagLabel}</Tag>);
    // 最长宽度为150
    expect(container.firstChild.firstChild).toHaveStyle({ 'max-width': '150px' });
  });
});

describe('CheckTag 组件测试', () => {
  test('CheckTag 选中后变色', async () => {
    const testTagText = '标签1';
    const checkedClass = 't-tag--checked';

    const { getByText, container } = render(<CheckTag>{testTagText}</CheckTag>);
    // 点击后变色
    expect(container.firstChild).not.toHaveClass(checkedClass);
    fireEvent.click(getByText(testTagText));
    expect(container.firstChild).toHaveClass(checkedClass);
  });
});
