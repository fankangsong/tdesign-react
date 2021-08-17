import React from 'react';
import { Message } from '@tencent/tdesign-react';

export default function () {
  return (
    <>
      <Message duration={0} theme="success">
        用户表示操作顺利达成
      </Message>
      <Message duration={0} theme="success" style={{ marginTop: 16 }}>
        用于表示操作顺利达成, 可关闭, 通常信息较长
      </Message>
    </>
  );
}
