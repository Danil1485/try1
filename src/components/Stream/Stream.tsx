import React, {useState} from 'react';
import './Stream.css'
import axios from "axios";

interface Page {
    name:string
}
interface Rooms {
    code:string,
    name:string
}
interface Cam {
    code:string,
    room:string,
    status:string,
    link:string
}
type GetRoomsResponse = {
    data: Rooms[];
};


export function Stream() {

    async function getRooms(): Promise<GetRoomsResponse | string> {
        try {
            const response: Response = await fetch('https://api.foxworld.online/neurosocket/cameras/rooms', {
                method: 'GET',

            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result: GetRoomsResponse = (await response.json()) as GetRoomsResponse;

            console.log('result is: ', JSON.stringify(result, null, 4));

            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
    getRooms();
    const [id, setId] = useState<Page>({name:'Зал 1'});

    return(
        <div className={'StreamBlocksMenu'}>


            <div className={'StreamBlock'}>
                {/*<h3 className="mt-5">Live Streaming</h3>*/}
                {/*<img src="{{ url_for('video_feed') }}"/>*/}

            </div>


        </div>
    )
}