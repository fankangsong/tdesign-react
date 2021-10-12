import React from 'react';
import { Alert } from '@tencent/tdesign-react';

export default function AlertBase() {
  return (
    <div className="tdesign-demo-block-column">
      <Alert theme="success" message="这是一条成功的消息提示" />
      <Alert theme="info" message="这是一条普通的消息提示" />
      <Alert theme="warning" message="这是一条警示消息" />
      <Alert theme="error" message="高危操作/出错信息提示" />
    </div>
  );
}
