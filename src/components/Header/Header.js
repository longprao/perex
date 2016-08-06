import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Header.scss';

export const Header = ({ toggled, mobileToggled, toggleSidebar, toggleMobileSidebar }) => (
  <div
    className={classNames(styles.container, {
      [styles.active]: toggled,
      [styles.mobileActive]: mobileToggled,
    })}
  >

    <div className={classNames(styles.toggle, 'hidden-phone')} onClick={toggleSidebar}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>

    <div className={classNames(styles.toggle, 'visible-phone')} onClick={toggleMobileSidebar}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>

    <form className={classNames(styles.search, 'form-control has-icon')}>
      <input type="search" />
      <i className="material-icons">search</i>
    </form>

    <button className={classNames(styles.btn, 'btn')}>
      New <i className="material-icons hidden-phone">add</i>
    </button>

    <div className={classNames(styles.actions, 'select hidden-tablet')}>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

  </div>
);

Header.propTypes = {
  toggled: React.PropTypes.bool.isRequired,
  mobileToggled: React.PropTypes.bool.isRequired,
  toggleSidebar: React.PropTypes.func.isRequired,
  toggleMobileSidebar: React.PropTypes.func.isRequired,
};

export default Header;
