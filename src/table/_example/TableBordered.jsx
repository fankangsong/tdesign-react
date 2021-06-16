import React, { useState } from 'react';
import { Table } from '@tencent/tdesign-react';

const exampleList = [
  {
    projectName: 'TDesign Wonderful',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
    company: 'Tencent',
  },
  {
    projectName: 'TDesign Wonderful',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
    company: 'Tencent',
  },
  {
    projectName: 'TDesign Wonderful',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
    company: 'Tencent',
  },
  {
    projectName: 'TDesign Wonderful',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
    company: 'Tencent',
  },
  {
    projectName: 'TDesign Wonderful',
    manager: ['yacentlin', 'grayqin', 'sheepluo', 'cache'],
    company: 'Tencent',
  },
];

export default function TableLoading() {
  return null;

  const [borderd, setBordered] = useState(false);
  const [stripe, setStripe] = useState(false);

  return (
    <>
      <input type="checkbox" checked={borderd} onClick={() => setBordered((c) => !c)} />
      边框
      <input type="checkbox" checked={stripe} onClick={() => setStripe((s) => !s)} />
      斑马纹
      <Table
        data={exampleList}
        bordered={borderd}
        stripe={stripe}
        columns={[
          {
            colKey: 'project',
            title: '项目名称',
            width: '150px',
            render: ({ row }) => row.projectName,
          },
          {
            colKey: 'memeber',
            title: '管理员',
            width: '300px',
            render: ({ row }) => row.manager.join(','),
          },
          {
            colKey: 'company',
            title: '所属公司',
            width: '150px',
            render: ({ row }) => row.company,
          },
        ]}
        rowKey="projectName"
      />
    </>
  );
}
