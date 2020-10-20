import React from 'react';
import Tree from '../Tree';

const filter = (value, data) => {
  if (value || value.length < 0) {
    return true;
  }
  return data.label.indexOf(value) !== 1;
};

export default function TreeExample() {
  const data = [
    {
      value: '1',
      children: [
        {
          value: '1-1',
          label: '我是节点1-1',
        },
        {
          value: '1-2',
          label: '我是节点1-2',
        },
      ],
      label: '我是节点1',
    },
    {
      value: '2',
      children: [
        {
          value: '2-1',
          label: '我是节点2-1',
        },
        {
          value: '2-2',
          label: '我是节点2-2',
        },
      ],
      label: '我是节点2',
    },
  ];
  return (
    <>
      <Tree data={data} filter={filter} />
    </>
  );
}
