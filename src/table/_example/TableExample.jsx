import React from 'react';
import { Table } from '@tdesign/react';

const exampleList = [
  {
    projectName: 'TDesign',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
  },
];

export default function TableExample() {
  return (
    <Table
      records={exampleList}
      columns={[
        {
          key: 'project',
          title: '项目名称',
          width: '15%',
          render: (x) => x.projectName,
        },
        {
          key: 'memeber',
          title: '管理员',
          width: '50%',
          render: (x) => x.manager.join(','),
        },
      ]}
      rowKey="projectName"
    />
  );
}
