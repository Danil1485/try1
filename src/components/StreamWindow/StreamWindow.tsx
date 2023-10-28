import React from 'react';
import './StreamWindow.css';
import {SideMenu} from "../SideMenu/SideMenu";
import {Stream} from "../Stream/Stream";

export function StreamWindow(){
    return(
        <div className={'StreamWindow'}>
            <SideMenu/>
            <Stream/>
        </div>
    )
}