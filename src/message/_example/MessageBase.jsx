import React from 'react';
import { Message } from '@tdesign/react';

export default function () {
  return (
    <>
      <Message theme="info">用户表示普通操作信息提示</Message>
      <Message theme="success">用户表示操作顺利达成</Message>
      <Message theme="warning">用户表示操作引起一定后果</Message>
      <Message theme="error">用户表示操作引起严重的后果</Message>
      <Message theme="question">用于帮助用户操作的信息提示</Message>
      <Message theme="loading">用于表示操作正在生效的过程中</Message>
    </>
  );
}
