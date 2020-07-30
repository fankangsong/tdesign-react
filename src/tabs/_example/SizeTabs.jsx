import React, { useState } from 'react';
import { Tabs, Button } from '@tdesign/react';
import TabPanel from '../TabPanel';

export default function SizeTabs() {
  const [size, setSize] = useState('small');
  return (
    <>
      <div>
        <Button onClick={() => setSize('small')}>small</Button>
        <Button onClick={() => setSize('middle')}>middle</Button>
        <Button onClick={() => setSize('large')}>large</Button>
        <Tabs
          tabPosition={'top'}
          size={size}
          theme={'default'}
          disabled={false}
          addable
        >
          <TabPanel name={'1'} label={'1'} forceRender={true}>
            <div>这是一个Tabs</div>
          </TabPanel>
          <TabPanel name={'2'} label={<div>2</div>}>
            <div>这是一个Tabs</div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
