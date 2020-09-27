import React from 'react';
import { Radio } from '@tdesign/react';

export default function RadioControlledExample() {
  return (
    <>
      <Radio display="block" value={false}>
        未选中
      </Radio>
      <Radio display="block" value>
        已选中
      </Radio>
      <Radio display="block" value={false} disabled>
        禁用未选中
      </Radio>
      <Radio display="block" value disabled>
        禁用已选中
      </Radio>
    </>
  );
}
