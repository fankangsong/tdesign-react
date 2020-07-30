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
        <Tabs tabPosition={'top'} size={'middle'}>
          <TabPanel name={'a'} label={'a'}>
            <div>a</div>
          </TabPanel>
          <TabPanel name={'b'} label={'b'}>
            <div>b</div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
