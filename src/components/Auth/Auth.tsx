import React, {useState, ChangeEvent, FormEvent} from "react";
import axios from "axios";
import {Test} from "../Api/Api";
import './Auth.css'



interface Data {
    username: string,
    password: string,
}

interface authjson {
    username: string,
    token: string,
    uuid: string,
    role: string,
}

export function Auth() {
    const [data, setData] = useState<Data>({username: "", password: ""});
    const [response, setResponse] = useState<Data | null>(null);

    const instance = axios.create({
        baseURL: "https://api.foxworld.online/",
        // baseURL: "http://localhost:8082/",
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
            // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            // 'Access-Control-Allow-Credentials': 'true'
        }
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    };


    async function Auth(data: any) {
        const promise = await instance.request({
            data, url: "auth-server/main/auth", method: 'POST'
        })
        console.log(promise.data)
        localStorage.setItem('token', promise.data.token)
        return promise.data;
    }

    return (
        <div className="Authorization">
            <div className="A">
                <div>Авторизация</div>
                <div className='input'>
                    <input
                        type="text"
                        name="username"
                        value={data.username}
                        className='placeholder'
                        placeholder="Логин"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        className='placeholder'
                        placeholder="Пароль"
                        onChange={handleChange}
                    />
                </div>

                <button onClick={() => Auth(data)}>Войти</button>
                <button onClick={() => Test()}>Тест</button>

            </div>
        </div>
    );
}