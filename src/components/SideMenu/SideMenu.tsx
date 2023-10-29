import React, {useEffect, useState} from 'react';
import './SideMenu.css'
import {Rooms} from "../Api/Api";
import {Cam, RoomsModel} from "../Stream/Stream";
import {useNavigate} from "react-router-dom";


export function SideMenu() {


    const [clickedButton, setClickedButton] = useState('');

    const navigate = useNavigate();



    const [rooms, setRooms] = useState<Array<RoomsModel>>()

    const handelRoom = (data: any) => {
        setRooms(data)
    }
    const buttonHandler = (code: any) => {
        navigate(`/stream/${code}`)
    };
    useEffect(() => {
        Rooms(handelRoom)
    }, [])
    console.log(rooms)
    return (
        <div className={'container1'}>
            {rooms?.map((item) => (
                <button
                    onClick={() => buttonHandler(item.code)}
                    className={`button ${clickedButton === 'button 2' ? 'active' : ''}`}
                >
                    {item.name}
                </button>
            ))}

        </div>
    )
}


