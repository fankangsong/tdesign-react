import React, { useState } from 'react';
import { InputNumber } from '../InputNumber';

export default function InputNumberExample() {
  const [value, setValue] = useState(0);

  return (
    <InputNumber
      max={15}
      min={-12}
      step={1.2}
      formatter={(value) => value + '%'}
      value={value}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
    ></InputNumber>
  );
}
