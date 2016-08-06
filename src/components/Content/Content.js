import React from 'react';
import classNames from 'classnames';

import styles from './Content.scss';

export const Content = ({ toggled, mobileToggled, children }) => (
  <div
    className={classNames(styles.container, {
      [styles.active]: toggled,
      [styles.mobileActive]: mobileToggled,
    })}
  >
    {children}
  </div>
);

Content.propTypes = {
  toggled: React.PropTypes.bool.isRequired,
  mobileToggled: React.PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default Content;
