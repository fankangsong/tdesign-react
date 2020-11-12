import React from 'react';
import { Pagination } from '@tencent/tdesign-react';

export default function PaginationExample() {
  return (
    <>
      <Pagination total={685} pageSize={15} showTotal />
      <br />
      <Pagination
        total={685}
        pageSize={15}
        totalContent={(total, [start, end]) => <span>{`共 ${total} 项数据 ${start} - ${end}`}</span>}
      />
    </>
  );
}
