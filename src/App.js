import React from 'react';
import { Card, Link } from '@material-ui/core';
class App extends React.Component{
  render(){
    return(
      <div>
        <Link to="/home">Home</Link>
        <Link to="/profile">profile</Link>
        <Link to="/portofolio">Portofolio</Link>
        <Link to="/contact">contact</Link>
      </div>
    )
  }
}

export default App;