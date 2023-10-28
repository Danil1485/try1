import React, {useState} from 'react';
import './Stream.css'

interface Page {
        id:number
}



export function Stream() {
        const [id, setId] = useState<Page>({id:1});

    return(
        <div className={'StreamBlocksMenu'}>
            <div className={'StreamBlock'}>
                {/*<h3 className="mt-5">Live Streaming</h3>*/}
                {/*<img src="{{ url_for('video_feed') }}"/>*/}

            </div>


        </div>
    )
}