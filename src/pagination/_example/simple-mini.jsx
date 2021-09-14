import React from 'react';
import { Pagination } from '@tencent/tdesign-react';

export default function PaginationExample() {
  const onChange = (pageInfo) => {
    console.log(pageInfo);
  };

  return <Pagination total={100} pageSize={5} size="small" theme="simple" onChange={onChange} />;
}
