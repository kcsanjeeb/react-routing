import React,{ useEffect, useState } from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';    

import SimpleBottomNavigation from './Components/SimpleBottomNavigation.js'
import ResponsiveDrawer from './Components/Drawer.js'

import SecondPage from './pages/SecondPage'
import FirstPage from './pages/FirstPage'
import Chat from './Chat'

function App() {
  const [channels,setChannels] = useState([]);

  return (
    <div className="app">

    <Router>
      <div className="app__body">
        <Switch>
          <Route path ="/search/:searchId">
            <Chat />
          </Route>
          <Route path ="/index">
            <FirstPage  title="Threads" id="sanjeeb"/> 
            {channels.map(channel=>(
                <FirstPage title={channel.name} id={channel.lid}/>
            ))}
          </Route>
          
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
