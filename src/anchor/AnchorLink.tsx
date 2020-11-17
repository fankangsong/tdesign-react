import React, { FunctionComponent, useContext } from 'react';
import classNames from 'classnames';
import { AnchorContext, Link } from './AnchorContext';
import { AnchorBlockType, AnchorStaticProps } from './_util/type';

export interface AnchorLinkProp extends Link {
  /**
   * 原生a标签的target属性
   */
  target?: string;
  /**
   * 子元素，可以是嵌套的AnchorLink
   */
  children?: React.ReactNode;
}

const AnchorLink: FunctionComponent<AnchorLinkProp> & AnchorStaticProps = (props) => {
  const { onClick, scrollTo, actLink } = useContext(AnchorContext);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { href, title } = props;
    if (onClick) {
      onClick(e, { title, href });
    }
    scrollTo({ href, title });
  };
  const { href, title, target, children = [] } = props;
  return (
    <div className={classNames('t-anchor_item', { act: actLink.href === href })}>
      <a href={href} className="t-anchor_link" title={title} target={target} onClick={(e) => handleClick(e)}>
        {title}
      </a>
      {children}
    </div>
  );
};
AnchorLink.blockType = AnchorBlockType.AnchorLink;
AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
