import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import Home from './components/Home';
import Bootstrap from './components/Bootstrap'
import C from './components/C'
import Cplus from './components/Cplus'
import CSS from './components/CSS'
import Java from './components/Java'
import Javascript from './components/Javascript'
import NodeJS from './components/NodeJS'
import Python from './components/Python'
import ReactJS from './components/ReactJS'
import SQL from './components/SQL'
import PageNotFound from './components/PageNotFound';

function App() {

  return ( 
    <>

      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bootstrap' component={Bootstrap}></Route>
        <Route path='/c' component={C} />
        <Route path='/cplus' component={Cplus}></Route>
        <Route path='/css' component={CSS}></Route>
        <Route path='/java' component={Java}></Route>
        <Route path='/javascript' component={Javascript}></Route>
        <Route path='/nodejs' component={NodeJS}/>
        <Route path='/python' component={Python}/>
        <Route path='/reactjs' component={ReactJS}/>
        <Route path='/sql' component={SQL}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>

    </>
  );
}

export default App;