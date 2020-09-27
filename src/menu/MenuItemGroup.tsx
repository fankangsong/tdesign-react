import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { StyledProps } from '../_type';
import useConfig from '../_util/useConfig';
import { MenuStaticProps, MenuBlockType } from './_util/type';

export interface MenuItemGroupProps extends StyledProps {
  /**
   * 分组标题
   */
  title?: string;
}
const MenuItemGroup: FunctionComponent<MenuItemGroupProps> & MenuStaticProps = (props) => {
  const { title, children, className, style } = props;
  const { classPrefix } = useConfig();
  return (
    <div className={classNames(className, `${classPrefix}-menu-group`)} style={style}>
      <div className={`${classPrefix}-menu-group-title`}>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

MenuItemGroup.blockType = MenuBlockType.MenuItemGroup;
MenuItemGroup.displayName = 'MenuItemGroup';

export default MenuItemGroup;
