import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
// import App from './App.js';
// import './index.css';

class Layout extends Component {
  render(){
    return(
      <div>
        <h1>Hey</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.reder(<Layout/>,app);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
