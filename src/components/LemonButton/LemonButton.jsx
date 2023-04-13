import React from 'react'
import './LemonButton.css'

export function LemonButton(props) {
    return (
        <>
            {props.disabled 
                ? <a className="LemonButton-disabled" href={props.link} role="button" onClick={(e)=> alert("Please Enter a Reservation Name.")} >{props.text}</a>
                : <a className="LemonButton" href={props.link} role="button" onClick={props.onClick}>{props.text}</a>
            }
            {' '}
        </>
    )
}
