import React from 'react';
import { Button } from '@tdesign/react/button';

export default function ButtonExample() {
  return (
    <>
      <Button>line</Button>
      <Button theme="primary">primary</Button>
      <Button theme="dashed">dashed</Button>
      <Button theme="warning">warning</Button>
      <Button theme="warning-line">warning-line</Button>
      <Button theme="link">link</Button>
      <div
        style={{ background: '#ddd', padding: '0 8px 8px 8px', marginTop: 8 }}
      >
        <Button theme="ghost">ghost</Button>
        <Button theme="ghost-line">ghost-line</Button>
      </div>
    </>
  );
}
