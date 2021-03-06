import React from 'react';
import { Tabs } from 'tdesign-react';

const { TabPanel } = Tabs;

export default function BasicTabs() {
  return (
    <Tabs placement={'top'} size={'medium'} defaultValue={'a'}>
      <TabPanel value="a" label="选项卡1">
        <div className="tabs-content" style={{ margin: 20 }}>选项卡1</div>
      </TabPanel>
      <TabPanel value="b" label="选项卡2">
        <div className="tabs-content" style={{ margin: 20 }}>选项卡2</div>
      </TabPanel>
      <TabPanel value="c" label="选项卡3">
        <div className="tabs-content" style={{ margin: 20 }}>选项卡3</div>
      </TabPanel>
    </Tabs>
  );
}
