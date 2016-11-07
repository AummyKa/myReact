import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App.js';
// import './index.css';

class Layout extends React.Component {
  render(){
    return(
      <div>
        <h1>Hey</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>,app);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
