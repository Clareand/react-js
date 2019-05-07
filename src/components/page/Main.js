import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Portofolio from './Portofolio';
import Profile from './Profile';

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/home" Component={Home}/>
                <Route exact path="/profile" Component={Profile}/>
                <Route exact path="/contact" Component={Contact}/>
                <Route exact path="/portofolio" Component={Portofolio}/>
            </Switch>
        )
    }
}