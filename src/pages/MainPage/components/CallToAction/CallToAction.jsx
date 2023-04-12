import React from 'react'
import "./CallToAction.css"
import { Image } from 'react-bootstrap';
import ActionImg from './assets/action.jpg'
import { LemonButton } from '../../../../components/'

//sometimes referred to as the jumbotron or the hero, 
//this component is the call-to-action section that guides the user to click a call-to-action button 
//while enticing them to do so in as few words as possible

export function CallToAction(props) {
    

    return (
        <section className='Action-Container'>
            <div className='Action-flex'>
                <div className='Action-title'>
                    Little Lemon
                </div>
                <div className='Action-Location'>
                    Chicago
                </div>
                <p className='Action-text'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <div className='Action-Container'>
                    <LemonButton text={"Reserve a Table"}/>
                </div>
            </div>
            <div className='Action-flex'>
                <Image src={ActionImg} className="ActionImg"></Image>
            </div>
        </section>
    )
}
