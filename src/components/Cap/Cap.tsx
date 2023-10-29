import React from 'react';
import './Cap.css';
import logo from './logo.svg';
import {useNavigate} from "react-router-dom";
export function Cap() {
    const navigate = useNavigate();
    return(
        <div className="header">
            <img className='logo' src={logo} width={60}/>
            <p onClick={() =>{navigate("/images")}}>Изображения</p>
            <p onClick={() =>{navigate("/")}}>Камеры</p>
        </div>
    )
}
