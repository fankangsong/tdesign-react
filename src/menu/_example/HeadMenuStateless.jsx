import React from 'react';
import { HeadMenu, MenuItem } from '@tencent/tdesign-react';
export default function BasicUsage() {
  return (
    <HeadMenu>
      <MenuItem name="1">菜单一</MenuItem>
      <MenuItem name="2">菜单二</MenuItem>
      <MenuItem name="3" disabled>
        菜单三
      </MenuItem>
    </HeadMenu>
  );
}
