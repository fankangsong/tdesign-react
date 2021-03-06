import React, { useState } from 'react';
import { Textarea } from 'tdesign-react';

export default function InputExample() {
  const [value, onChange] = useState('');
  return (
    <Textarea
      placeholder="请输入内容"
      value={value}
      onChange={(value) => {
        console.log(value);
        onChange(value);
      }}
    />
  );
}
