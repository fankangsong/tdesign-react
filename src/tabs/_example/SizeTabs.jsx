import React, { useState } from 'react';
import { Tabs, Button } from '@tencent/tdesign-react';
import TabPanel from '../TabPanel';

export default function SizeTabs() {
  const [size, setSize] = useState('middle');
  return (
    <>
      <div>
        <Button onClick={() => setSize('small')}>small</Button>
        <Button onClick={() => setSize('middle')}>middle</Button>
        <Button onClick={() => setSize('large')}>large</Button>
        <Tabs tabPosition={'top'} size={size} theme={'default'} disabled={false} addable>
          <TabPanel name={'1'} label={'1'} forceRender={true}>
            <div style={{ margin: 20 }}>这是一个Tabs</div>
          </TabPanel>
          <TabPanel name={'2'} label={<div>2</div>}>
            <div style={{ margin: 20 }}>这是一个Tabs</div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
