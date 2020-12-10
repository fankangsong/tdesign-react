import React from 'react';
import { Button } from '@tencent/tdesign-react';

export default function ButtonExample() {
  return (
    <>
      <section>
        <Button size="small">line</Button>
        <Button theme="primary" size="small">
          primary
        </Button>
        <Button theme="dashed" size="small">
          dashed
        </Button>
        <Button theme="link" size="small">
          link
        </Button>
      </section>
      <section>
        <Button>line</Button>
        <Button theme="primary">primary</Button>
        <Button theme="dashed">dashed</Button>
        <Button theme="link">link</Button>
      </section>
      <section>
        <Button size="large">line</Button>
        <Button theme="primary" size="large">
          primary
        </Button>
        <Button theme="dashed" size="large">
          dashed
        </Button>
        <Button theme="link" size="large">
          link
        </Button>
      </section>
    </>
  );
}
