import React, {useEffect, useState} from 'react';
import './StreamWindow.css';
import {SideMenu} from "../SideMenu/SideMenu";
import {Cam, Stream} from "../Stream/Stream";
import {useParams} from "react-router-dom";
import {Cap} from "../Cap/Cap";
import {Footer} from "../Footer/Footer";
import {Cameras} from "../Api/Api";

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
                <>
                    {
                        cameras?.map((item) => (
                            <Stream code={item.code} link={item.link}/>
                        ))
                    }
                </>
            </div>
            <Footer/>
        </>
    )
}
