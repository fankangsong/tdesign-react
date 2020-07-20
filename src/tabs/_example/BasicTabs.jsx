import React, { useState } from 'react';
import { Tabs } from '@tdesign/react';
import TabPanel from '../TabPanel';

export default function BasicTabs() {
  const [position, setPosition] = useState('top');
  const [active, setActive] = useState('123');
  const changePosition = () => {
    setPosition('left');
  };
  const changeActive = () => {
    setActive('456');
  };
  return (
    <>
      <button onClick={changePosition}>切换方向</button>
      <button onClick={changeActive}>切换active</button>
      <Tabs
        tabPosition={position}
        size={'middle'}
        theme={'card'}
        disabled={false}
        defaultActiveName={'456'}
        addable
      >
        <TabPanel name={'123'} label={'12323122321112'} forceRender={true}>
          <div>123</div>
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
    </>
  );
}
