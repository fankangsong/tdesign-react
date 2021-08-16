import React from 'react';
import { Message } from '@tencent/tdesign-react';

export default function () {
  return (
    <>
      <Message duration={0} theme="question">
        用于帮助用户操作的信息提示
      </Message>
      <Message duration={0} theme="question" style={{ marginTop: 16 }}>
        用于帮助用户操作的信息提示, 可关闭, 通常信息较长
      </Message>
    </>
  );
}
