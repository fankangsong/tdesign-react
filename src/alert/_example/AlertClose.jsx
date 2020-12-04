import React from 'react';
import { Alert } from '@tencent/tdesign-react';

export default function AlertClose() {
  const beforeClose = (resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  };
  return (
    <>
      <Alert theme="success" message="这是一条成功的消息提示" close />
      <Alert theme="info" message="这是一条普通的消息提示" close />
      <Alert theme="warning" message="这是一条警示消息" close />
      <Alert theme="error" message="高危操作/出错信息提示" close beforeClose={beforeClose} />
    </>
  );
}
