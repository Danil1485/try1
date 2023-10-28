import React from 'react';
import './App.css';
import {Auth} from "./components/Auth/Auth";
import {Cap} from "./components/Cap/Cap";
import {Footer} from "./components/Footer/Footer";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Stream} from "./components/Stream/Stream";
import {StreamWindow} from "./components/StreamWindow/StreamWindow";


function App() {
  return (
    <div className="App">
        <Cap/>
        <StreamWindow/>
        <Footer/>
    </div>
  );
}

export default App;
