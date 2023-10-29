import React, {useEffect, useState} from 'react';
import './Stream.css'
import {Rooms} from "../Api/Api";
import {useParams} from "react-router-dom";
import {Cams} from "./Stream2";


interface Page {
    name: string
}

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

export function Stream(props: props) {


    return (
        <div className={'StreamBlocksMenu'}>
            <Cams code={props.code} link={props.link}/>
        </div>
    )
}
