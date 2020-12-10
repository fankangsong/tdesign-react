import React, { useState, useRef } from 'react';

import { Select, Button } from '@tencent/tdesign-react';

const { Option } = Select;

const SelectWithRef = () => {
  const [value, setValue] = useState('apple');
  const ref = useRef(null);
  const onChange = (value) => {
    setValue(value);
  };

  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ];

  const onClick = () => {
    console.log('REF', ref);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Select value={value} onChange={onChange} style={{ width: '40%' }} ref={ref}>
        {options.map((item, index) => (
          <Option key={index} label={item.label} value={item.value} />
        ))}
      </Select>
      <Button onClick={onClick} style={{ marginLeft: '24px' }}>
        打印ref
      </Button>
    </div>
  );
};

export default SelectWithRef;
