import React from 'react';
import './Stream.css'
export function Stream2() {
    return(
        <div className={'StreamBlocksMenu'}>
            <div className={'StreamBlock'}>
                {/*<h3 className="mt-5">Live Streaming</h3>*/}
                {/*<img src="{{ url_for('video_feed') }}"/>*/}
                <iframe width="500" height="300" src="https://sirius-online.ru/embedded/karas37"></iframe>
            </div>


        </div>
    )
}