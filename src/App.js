import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as contactAction from './actions/contactAction'
import {connect} from 'react-redux'

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name
    }
    this.props.createContact(contact);
    console.log(this.state.name)
  }
  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }
  render()
  {
    let name;
    return(
      <div>
        <h1>ClientSideContactApplication</h1>
        <hr />
        { <ul>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
        </ul> }
       <div>
         <h3> Add Contact</h3>
         <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <input type="submit" />
         </form>
       </div>
      </div>
    )
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
