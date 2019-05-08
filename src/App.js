import React from 'react';
import { Card, Link } from '@material-ui/core';
import Main from './components/page/Main';
import MyAppBar from './components/MyAppBar'
class App extends React.Component{
  render(){
    return(
      <div>
        <MyAppBar/>
        <Main/>
      </div>
    )
  }
}

export default App;