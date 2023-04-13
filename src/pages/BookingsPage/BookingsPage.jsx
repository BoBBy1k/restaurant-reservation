import React from 'react'
import { BookingForm } from './components'
import Restaurant from '../../assets/Restaurant.jpg'
import './BookingsPage.css'

export function BookingsPage( { name, setName, date, setDate, time, setTime, availableTimes, dispatchAvailableTimes, guests, setGuests, occasion, setOccasion, submitForm}, props) {

    return (
        <article className="Bookings-Container">
            <section className="Booking-flex">
                <img src={Restaurant} alt="restaurant" style={{width:"600px", height:"700px", objectFit:"none", objectPosition:"1% 35%", borderRadius:"5%"}}></img>
            </section>
            <section className="Booking-flex">
                <BookingForm name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime} availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} submitForm={submitForm}/>
            </section>
        </article>
    )
}
