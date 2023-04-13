import React from 'react'
import './ConfirmedBooking.css'
import logo from "../../assets/LemonLogoIcon.png"
export function ConfirmedBooking( { name, date, time, guests, occasion }, props) {

    let formattedDate = date.split("-")
    return (
        <>
                    <section style={{ backgroundColor:"#495e57", paddingTop:"10px"}}>
                <div className='ThankYou'>
                Thank You!
                </div>
            </section>
            <section className="Confirmed-Container">
                <img src={logo} alt="logo" width="200px"/>
                <p className='Confirmed-Text'>
                    Reservation Confirmed for {name}  
                    <br />
                    {formattedDate[1]}/{formattedDate[2]}/{formattedDate[0]} @ {time}
                    <br />
                    {guests + " "}
                    { parseInt(guests) === 1 
                        ? "Guest"
                        : "Guests"
                    }
                    <br />
                    {occasion}
                </p>
            </section>
        </>
    )
}
