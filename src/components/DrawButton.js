import React from 'react';
import {Link} from 'react-router-dom';
import './draw-button.css'

function DrawButton(props) {
    return (
        <Link to={`/${props.destination}`}>
            <button className='drawn-button draw'>
                {props.buttonName}
            </button>
        </Link>
    )
}

export default DrawButton;