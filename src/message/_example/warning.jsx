import React from 'react';
import { Message } from '@tencent/tdesign-react';

export default function () {
  return (
    <>
      <Message duration={0} theme="warning">
        用户表示操作引起一定后果
      </Message>
      <Message duration={0} theme="warning" style={{ marginTop: 16 }}>
        用于表示操作引起一定后果, 可关闭, 通常信息较长
      </Message>
    </>
  );
}
