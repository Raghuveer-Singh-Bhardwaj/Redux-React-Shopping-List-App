import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import createItem from './ItemActions';

class App extends Component {
  handleAdd(e){
    var name = prompt("Enter item's name")
    this.props.createItem(name);
  }
  handleRemove(e){
    var name = prompt("Enter item name to delete")
    this.props.removeItem(name);
  }
  render() {
    var i = -1;
    var shopping_items = this.props.items.map((value) => {
      return <li>{value.name}</li>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shopping List App</h1>
        </header>
        <br/>
        <div class = "container">
            <button class = "btn btn-info" onClick = {this.handleAdd.bind(this)}>Add Item</button>
            <span>       </span>
            <button class = "btn btn-danger" onClick = {this.handleRemove.bind(this)}>Pop Item</button>
        </div> 
        <br/>
        <center>
          <ul>    
            {shopping_items}
          </ul>
        </center>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    items : state,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createItem : (text) => {dispatch({type: "CREATE_ITEM",itemName: text})},
    removeItem : (text) => {dispatch({type : "REMOVE_ITEM",itemName : text})}
  }
}
export default connect(stateToProps,dispatchToProps)(App);
