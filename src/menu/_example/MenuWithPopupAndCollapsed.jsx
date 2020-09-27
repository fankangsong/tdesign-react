import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu, IconFont } from '@tdesign/react';

export default function BasicUsage() {
  const [active, setActive] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu
      mode="popup"
      active={active}
      onChange={(v) => setActive(String(v))}
      collapsed={collapsed}
      options={
        <IconFont
          name={collapsed ? 'arrow-right' : 'arrow-left'}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
      }
    >
      <MenuItem name="1" icon={<IconFont name="user" />}>
        菜单一
      </MenuItem>
      <SubMenu name="sub-1" title="菜单二" icon={<IconFont name="user" />}>
        <MenuItem name="3">子菜单2-1</MenuItem>
        <MenuItem name="4">子菜单2-2</MenuItem>
      </SubMenu>
      <SubMenu name="sub-2" title="菜单三" icon={<IconFont name="user" />}>
        <MenuItem name="5">子菜单3-1</MenuItem>
        <MenuItem name="6">子菜单3-2</MenuItem>
      </SubMenu>
      <MenuItem name="7" disabled icon={<IconFont name="user" />}>
        菜单四
      </MenuItem>
    </Menu>
  );
}
