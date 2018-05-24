import React, { Component } from 'react';
import { firebaseApp } from "../Firebase";
import {connect} from "react-redux";
import '../css/App.css';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >Sign Out</button>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{

  }
}

export default connect(mapStateToProps, null)(App);
