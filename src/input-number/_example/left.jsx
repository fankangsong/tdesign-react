import React from 'react';
import { InputNumber } from '@tencent/tdesign-react';

export default function InputNumberExample() {
  return <InputNumber defaultValue={5} theme="column" onChange={console.log} />;
}
