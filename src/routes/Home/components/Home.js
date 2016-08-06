import React, { Component } from 'react';
import styles from './Home.scss';

import Modal from 'components/Modal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }
  
  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };
  
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };
  
  render() {
    return (
      <div className={styles.container}>
    
        <div className="table-responsive">
          <table className="table">
        
            <thead>
              <tr>
                <td>Date</td>
                <td>Name</td>
                <td>Category</td>
                <td>Amount</td>
                <td>Balance</td>
              </tr>
            </thead>
        
            <tbody>
              <tr>
                <td onClick={this.openModal}>05 Aug 2016</td>
                <td onClick={this.openModal}>Long Doan</td>
                <td onClick={this.openModal}>Entertainment</td>
                <td onClick={this.openModal}><span className={styles.unit}>USD</span> 1000.01</td>
                <td onClick={this.openModal}><span className={styles.unit}>USD</span> 15435.65</td>
              </tr>
            </tbody>
      
          </table>
        </div>
    
        <Modal
          title="Edit Transaction"
          isOpen={this.state.modalIsOpen}
          outsideTap={this.closeModal}
          className={styles.modal}
        >
      
          <div className="form">
            
            <div className="row">
              <div className="form-group">
                <label className="label">Name</label>
            
                <div className="form-control">
                  <input type="text" />
                </div>
              </div>
          
              <div className="form-group">
                <label className="label">Email</label>
            
                <div className="form-control has-icon">
                  <input type="email" />
                  <i className="material-icons">mail_outline</i>
                </div>
              </div>
            </div>
        
            <div className="row">
              <div className="form-group">
                <label className="label">Radio</label>
            
                <div className="form-control">
                  <div className="radio">
                    <input type="radio" name="radio" id="radio1" checked />
                    <label htmlFor="radio1">YES</label>
                  </div>
              
                  <div className="radio">
                    <input type="radio" name="radio" id="radio2" />
                    <label htmlFor="radio2">NO</label>
                  </div>
                </div>
              </div>
          
              <div className="form-group">
                <label className="label">Checkbox</label>
            
                <div className="form-control">
                  <div className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" />
                  </div>
                </div>
              </div>
            </div>
        
            <div className="row">
              <div className="form-group">
                <label className="label">Name</label>
            
                <div className="form-control">
                  <div className="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
          
              <div className="form-group">
                <label className="label">Email</label>
            
                <div className="form-control">
                  <input type="email" />
                </div>
              </div>
            </div>
        
            <div className="form-group">
              <label className="label">Textarea</label>
          
              <div className="form-control">
                <textarea />
              </div>
            </div>
            
          </div>
    
        </Modal>
      </div>
    );
  }
}
