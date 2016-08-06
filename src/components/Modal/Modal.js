import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import './Modal.scss';

export default class Modal extends Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string,
    outsideTap: React.PropTypes.func,
    className: React.PropTypes.string,
    children: React.PropTypes.any,
  };
  
  render () {
    const { className, outsideTap, title, children } = this.props;
    
    if (this.props.isOpen) {
      return (
        <CSSTransitionGroup
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionName="modal-anim"
        >
          
          <div className={classNames('modal-wrapper', className)}>
            {title && (<div className="modal-header">
              {title}
            </div>)}
  
            <div className="modal-body">
              {children}
            </div>
          </div>
          
          <div className="modal-bg" onClick={outsideTap}>
          </div>
          
        </CSSTransitionGroup>
      );
    }
    
    return (
      <CSSTransitionGroup
        transitionName="modal-anim"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      />
    );
  }
};
