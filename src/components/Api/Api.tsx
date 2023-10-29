import axios from "axios";
import {GetRoomsResponse} from "../Stream/Stream";

const instance = (token: string) => {
    return axios.create({
        baseURL: "https://api.foxworld.online/",
        // baseURL: "http://localhost:8082/",
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    });
}

export const Api = () => {
    let token = localStorage.getItem("token")
    if (token != null) {
        console.log(token)
        return instance(token)
    } else {

        return (
            axios.create({
                baseURL: "https://api.foxworld.online/",
                // baseURL: "http://localhost:8082/",
                timeout: 1000,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
        )
    }
}

export const Test = () => {
    const promise = () => {
        return Api().get("auth-server/main/test").then(r => r.data)
    }
    console.log(promise())
    return promise()
}

export const Rooms = (handle: any) => {
    return Api().get("neurosocket/cameras/rooms").then(r => handle(r.data))
}
export const Cameras = (handle: any, code:any) => {
    return Api().get(`neurosocket/cameras/room/${code}`).then(r => handle(r.data))
}

export const PostData = (handle: any, value: any) =>{
    console.log(value)
    const formData = new FormData();
    formData.append("file", value)
    return axios.create({baseURL: "http://37.204.47.201:5010"}).post("label" , formData, {
        headers: {
            "Content-Type":"multipart/form-data"
        },
        data: formData
    }).then(e => handle(e.data))
}
