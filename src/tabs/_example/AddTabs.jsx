import React, { useState } from 'react';
import { Tabs } from '@tdesign/react';
import TabPanel from '../TabPanel';

export default function AddTabs() {
  const [panels, setPanels] = useState([
    {
      name: 1,
      label: 1,
    },
  ]);
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
          disabled={false}
          theme={'card'}
          defaultActiveName={'2'}
          addable={true}
          onAdd={() => {
            setPanels((panels) => {
              panels.push({
                name: panels.length + 1,
                label: panels.length + 1,
              });
              return [...panels];
            });
          }}
        >
          {panels.map(({ name, label }) => (
            <TabPanel key={name} name={name} label={label}>
              {label}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
}
