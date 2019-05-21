import React from 'react';
import { Card, Link } from '@material-ui/core';
import Main from './components/page/Main';
import MyAppBar from './components/MyAppBar';
import MyBar from './components/MyBar'; 
import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component{
  componentDidMount(){
    document.title = "Khaleesi's Page"
  }
  render(){
    return(
      <div>
        <MyBar/>
        <Main/>
      </div>
    )
  }
}

export default App;