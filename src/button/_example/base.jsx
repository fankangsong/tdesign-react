import React from 'react';
import { Button } from '@tencent/tdesign-react';

export default function ButtonExample() {
  return (
    <>
      <div className="tdesign-demo-block">
        <Button theme="default" variant="base">填充按钮</Button>
        <Button theme="default" variant="outline">描边按钮</Button>
        <Button theme="default" variant="dashed">虚框按钮</Button>
        <Button theme="default" variant="text">文字按钮</Button>
      </div>
      <div className="tdesign-demo-block">
        <Button theme="primary" variant="base">
          填充按钮
        </Button>
        <Button theme="primary" variant="outline">
          描边按钮
        </Button>
        <Button theme="primary" variant="dashed">
          虚框按钮
        </Button>
        <Button theme="primary" variant="text">
          文字按钮
        </Button>
      </div>
      <div className="tdesign-demo-block">
        <Button theme="success" variant="base">
          填充按钮
        </Button>
        <Button theme="success" variant="outline">
          描边按钮
        </Button>
        <Button theme="success" variant="dashed">
          虚框按钮
        </Button>
        <Button theme="success" variant="text">
          文字按钮
        </Button>
      </div>
      <div className="tdesign-demo-block">
        <Button theme="warning" variant="base">
          填充按钮
        </Button>
        <Button theme="warning" variant="outline">
          描边按钮
        </Button>
        <Button theme="warning" variant="dashed">
          虚框按钮
        </Button>
        <Button theme="warning" variant="text">
          文字按钮
        </Button>
      </div>
      <div className="tdesign-demo-block">
        <Button theme="danger" variant="base">
          填充按钮
        </Button>
        <Button theme="danger" variant="outline">
          描边按钮
        </Button>
        <Button theme="danger" variant="dashed">
          虚框按钮
        </Button>
        <Button theme="danger" variant="text">
          文字按钮
        </Button>
      </div>
      <div className="tdesign-demo-block">
        <Button loading variant="base">
          填充按钮
        </Button>
      </div>
    </>
  );
}
