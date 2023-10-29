import React, {useEffect, useState} from 'react';
import './Stream.css'
import {Rooms} from "../Api/Api";
import {useParams} from "react-router-dom";

export interface RoomsModel {
    code: string,
    name: string
}

export interface Cam {
    code: string,
    room: string,
    status: string,
    link: string
}

export type GetRoomsResponse = {
    data: RoomsModel[];
};
interface props{
    code : string,
    link: string
}
export function Cams(props:props){
    return(
        <div className={'StreamBlock'}>
            {/*37.204.47.201:5005/video_feed*/}
            <img className={'StreamImg'} src={`http://foxworld.online:25601/capture_cam/${props.link}`}/>
        </div>
    )
}