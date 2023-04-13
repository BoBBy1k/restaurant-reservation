import React from 'react'
import './Specials.css'
import { LemonButton } from '../../../../components/'
import { SpecialCard } from './components/'
import { SpecialsList } from './SpecialsList'

//the component that loops over the specials that come from a data source
export function Specials(props) {

    return (
        <section>
            <div className='Specials-Container'>
                <div className='Specials-flex' style={{ textAlign: "center"}}>
                    This Weeks Specials!
                </div>
                <div className='Specials-flex' style={{ textAlign: "center"}}>
                    <LemonButton text="Online Menu" />
                </div>
            </div>
            <div className='Specials-img-Container'>
            {SpecialsList.map( (special, index) => 
                <div className='Specials-img-flex' key={index}>
                    <SpecialCard image={special.image} imageAlt={special.imageAlt} title={special.title} price={special.price} text={special.text} link={special.link}/>
                </div>
            )}
            </div>
        </section>
    )
}
