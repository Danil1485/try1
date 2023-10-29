import {useEffect, useState} from "react";
import {PostData} from "../Api/Api";
import {Footer} from "../Footer/Footer";
import {Cap} from "../Cap/Cap";

interface dataItem {
    errors: boolean,
    prediction: string,
    raw: number[]
}

function ImageViewer() {

    const [file, setFile] = useState()

    const handleSend = (e: any) => {
        setFile(e.target.files[0])
    }

    const [data, setData] = useState<dataItem>()
    const handleData = (e: any) => {
        setData(e)
    }

    function Send() {
        PostData(handleData, file)
        console.log(data)
    }

    return (
        <>
            <Cap/>
            <>
                <input type="file" onChange={(e) => {
                    handleSend(e)
                }}/>
                <button onClick={Send}>Send
                </button>
                {data?.prediction}
            </>
            <Footer/>
        </>
    )
}

export default ImageViewer
