import React, {useEffect, useState} from 'react';
import './StreamWindow.css';
import {SideMenu} from "../SideMenu/SideMenu";
import {Cam, Stream} from "../Stream/Stream";
import {useParams} from "react-router-dom";
import {Cap} from "../Cap/Cap";
import {Footer} from "../Footer/Footer";
import {Cameras} from "../Api/Api";
import {Cams} from "../Stream/Stream2";

export function StreamWindow() {
    const {code} = useParams()

    const [cameras, setCameras] = useState<Array<Cam>>()

    const handleCam = (data: any) => {
        setCameras(data)
    }

    useEffect(() => {
        Cameras(handleCam, code)
    }, [])

    return (
        <>
            <Cap/>
            <div className={'StreamWindow'}>
                <SideMenu/>
                <div className={'StreamBlocksMenu'}>
                    {
                        cameras?.map((item) => (
                            <Cams code={item.code} link={item.link}/>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
