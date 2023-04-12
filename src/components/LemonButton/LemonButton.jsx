import React from 'react'
import './LemonButton.css'

export function LemonButton(props) {
    return (
        <>
            <a className="LemonButton" href={props.href} role="button">{props.text}</a>{' '}
        </>
    )
}
