import React, { useState } from 'react';
import { Tabs, Button } from '@tdesign/react';
import TabPanel from '../TabPanel';

export default function PositionTabs() {
  const [position, setPosition] = useState('top');
  return (
    <>
      <div>
        <Button onClick={() => setPosition('top')}>top</Button>
        <Button onClick={() => setPosition('bottom')}>bottom</Button>
        <Button onClick={() => setPosition('left')}>left</Button>
        <Button onClick={() => setPosition('right')}>right</Button>
        <Tabs
          tabPosition={position}
          size={'middle'}
          theme={'default'}
          disabled={false}
          addable
        >
          <TabPanel name={'123'} label={'12323122321112'} forceRender={true}>
            <div>
              123<div>234</div>
            </div>
          </TabPanel>
          <TabPanel name={'456'} label={<div>123</div>}>
            <div>456</div>
          </TabPanel>
          <TabPanel name={'11111'} label={123}>
            <div>456</div>
          </TabPanel>
          <TabPanel name={'1111111'} label={123}>
            <div>456</div>
          </TabPanel>
          <TabPanel name={'11111111'} label={<div>123</div>}>
            <div>456</div>
          </TabPanel>
          <TabPanel name={'11111111123123'} label={<div>123</div>}>
            <div>456</div>
          </TabPanel>
          <TabPanel name={'1111111112312312321312'} label={<div>123</div>}>
            <div>456</div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
