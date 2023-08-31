import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true
    };
  }
  onClickEvent = (e) =>{
    this.setState({
      isVisible : !this.state.isVisible
    })
  } 
  onDeleteUser = (e) =>{
    //const {id} = this.props;
    //Consumer Dispatch
  }

  render() {
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div className = "col-md-8 mb-4">
        <div className = "card"> 
          <div className = "card-header d-flex justify-content-between">
            <h4 className = "d-inline" onClick={this.onClickEvent}>{name}</h4>
            <i className = "fa fa-trash" style = {{cursor : "pointer"}}></i>
          </div>
          <div className = "card-body">
            <p className = "card-text">Maaş : {salary}</p>
            <p className = "card-text">Departman : {department}</p>
          </div>
        </div>
      </div>
    )
  }
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired
}
export default User;
