import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../sass/customcard.scss'

function Customcard(props) {
    return(
        <a href={`/${props.name}`}>
            <div className={`customcard ${props.colorclass}`}>
                <FontAwesomeIcon icon={props.icon} size="5x"/>
                <div className="customcard-body">
                    <div>
                        <h2> {props.name} </h2>
                    </div>
                </div>
            </div>
        </a>
        
    )
}

export default Customcard