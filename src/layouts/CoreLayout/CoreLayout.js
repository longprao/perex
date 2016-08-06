import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import ContentContainer from '../../containers/ContentContainer';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div className="container">
    <HeaderContainer />
    <SidebarContainer />
    <ContentContainer children={children} />
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default CoreLayout;
