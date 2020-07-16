import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@tdesign/react';

/**
 * API 的方式唤起一个对话框
 * @returns 异步返回布尔值，为 true 则表示用户确认，为 false 则表示用户取消
 */
export function show({ content }) {
  return new Promise<void>((resolve) => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    ReactDOM.render(
      <ModalAlertAPI
        content={content}
        onExited={() => {
          ReactDOM.unmountComponentAtNode(el);
          el.remove();
        }}
      />,
      el,
    );
  });
}

function ModalAlertAPI({ content, onExited }) {
  const [visible, setVisible] = useState(false);

  // 渲染之后，马上显示
  useEffect(() => setVisible(true), []);

  const close = () => {
    setVisible(false);
    setTimeout(onExited, 300);
  };

  return (
    <ApiModal visible={visible} onClose={close}>
      {content}
    </ApiModal>
  );
}

function ApiModal({ children, onClose, visible }) {
  // TODO: 使用组件的对话框替换
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, .5)',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        fontSize: '12px',
        overflow: 'auto',
        opacity: visible ? 1 : 0,
        transition: 'opacity .3s ease',
      }}
    >
      <div
        style={{
          padding: 24,
          background: 'white',
          width: '80%',
          margin: '48px auto',
          transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
          transition: 'transform .3s ease',
        }}
      >
        <div className="tdesign-page-doc">
          <div className="tdesign-document">{children}</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button onClick={onClose}>确定</Button>
        </div>
      </div>
    </div>
  );
}
