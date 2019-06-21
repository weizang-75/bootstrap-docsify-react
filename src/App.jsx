import React from 'react';
import './App.css';
import moment from 'moment';

function App() {
  return (
    <div className="App">
      React: {moment(Date.now()).format("ddd, MMMM Do, h:mm a")}
    </div>
  );
}

export default App;
