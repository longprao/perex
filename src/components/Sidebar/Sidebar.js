import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';

import styles from './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    toggled: React.PropTypes.bool.isRequired,
    mobileToggled: React.PropTypes.bool.isRequired,
    toggleMobileSidebar: React.PropTypes.func.isRequired,
  };
  
  handleClick = () => {
    const { toggleMobileSidebar } = this.props;
    
    toggleMobileSidebar();
  };
  
  render() {
    const { toggled, mobileToggled } = this.props;
    
    return (
      <div
        className={classNames(styles.container, {
          [styles.active]: toggled,
          [styles.mobileActive]: mobileToggled,
        })}
      >
    
        <IndexLink to="/" className={styles.logo} onClick={this.handleClick}>
          <i className="icon-logo" />
        </IndexLink>
    
        <ul className={styles.menu}>
          <li>
            <Link to="/transactions" onClick={this.handleClick}>
              <i className="material-icons">event</i>
              <span className={styles.text}>Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/charts" onClick={this.handleClick}>
              <i className="material-icons">show_chart</i>
              <span className={styles.text}>Charts</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" onClick={this.handleClick}>
              <i className="material-icons">library_books</i>
              <span className={styles.text}>Categories</span>
            </Link>
          </li>
          <li>
            <Link to="/payess" onClick={this.handleClick}>
              <i className="material-icons">people_outline</i>
              <span className={styles.text}>Payees</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={this.handleClick}>
              <i className="material-icons">settings</i>
              <span className={styles.text}>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={this.handleClick}>
              <i className="material-icons">perm_identity</i>
              <span className={styles.text}>Profile</span>
            </Link>
          </li>
        </ul>
  
      </div>
    );
  }
}

export default Sidebar;
