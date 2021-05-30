import React from 'react';
import { Message } from '@tencent/tdesign-react';

export default function () {
  return (
    <Message duration={0} theme="error">
      用户表示操作引起严重的后果
    </Message>
  );
}
