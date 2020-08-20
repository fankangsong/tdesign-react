import React from 'react';
import { Button } from '@tdesign/react';
import PopConfirm from '../PopConfirm';

export default function ButtonTextExample() {
  const $content = '请确认您要进行此操作';
  const handleConfirm = (e) => {
    console.log('confirm button clicked!');
  };

  const handleCancel = (e) => {
    console.log('confirm button clicked!');
  };

  return (
    <PopConfirm
      content={$content}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    >
      <Button>Hover me</Button>
    </PopConfirm>
  );
}
