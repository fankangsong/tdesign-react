// @ts-nocheck
import React, { useState } from 'react';
import { Form, Radio, Input } from 'tdesign-react';

const { FormItem } = Form;

export default function AlignForm() {
  const [labelAlign, setLabelAlign] = useState('right');
  return (
    <div className="tdesign-demo-block-column">
      <Radio.Group value={labelAlign} onChange={(value) => setLabelAlign(value)}>
        <Radio.Button value="left">左对齐</Radio.Button>
        <Radio.Button value="right">右对齐</Radio.Button>
        <Radio.Button value="top">顶部对齐</Radio.Button>
      </Radio.Group>
      <Form labelAlign={labelAlign} labelWidth={80}>
        <FormItem label="名字" name="name">
          <Input />
        </FormItem>
        <FormItem label="密码" name="password">
          <Input />
        </FormItem>
      </Form>
    </div>
  );
}
