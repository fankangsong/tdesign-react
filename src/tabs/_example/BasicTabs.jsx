import React from 'react';
import { Tabs } from '@tdesign/react';
import TabPanel from '../TabPanel';

export default function BasicTabs() {
  return (
    <>
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <Tabs
          tabPosition={'top'}
          size={'middle'}
          theme={'card'}
          disabled={false}
          defaultActiveName={'456'}
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
