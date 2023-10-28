import React, {useState} from 'react';
import './SideMenu.css'


export function SideMenu() {


    const [clickedButton, setClickedButton] = useState('');


    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.name);
    };
    return(
        <div className={'container1'}>
            <form className={'buttonContainer'}>
                <button
                    onClick={buttonHandler}
                    className={`button ${clickedButton === 'button 1' ? 'active' : ''}`}
                    name="button 1"
                >
                    Зал 1
                </button>

                <button
                    onClick={buttonHandler}
                    className={`button ${clickedButton === 'button 2' ? 'active' : ''}`}
                    name="button 2"
                >
                    Зал 2
                </button>

            </form>

        </div>
    )
}


