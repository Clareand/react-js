import React from 'react';
import { Card, Link } from '@material-ui/core';
import Main from './components/page/Main'
class App extends React.Component{
  render(){
    return(
      <div>
        <Link to="/home">Home</Link>
        <Link to="/profile">profile</Link>
        <Link to="/portofolio">Portofolio</Link>
        <Link to="/contact">contact</Link>
        <hr/>
        <Main/>
      </div>
    )
  }
}

export default App;