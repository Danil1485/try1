import React from 'react';
import './App.css';
import {Auth} from "./components/Auth/Auth";
import {Cap} from "./components/Cap/Cap";
import {Footer} from "./components/Footer/Footer";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Stream} from "./components/Stream/Stream";
import {StreamWindow} from "./components/StreamWindow/StreamWindow";
import {BrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ImageViewer from "./components/ImageViewer/ImageViewer";


function App() {

    return (
        <div className="App">

            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" Component={MainPage}/>
                    <Route path={"/stream/:code"} Component={StreamWindow}/>
                    <Route path={"/images"} Component={ImageViewer}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
