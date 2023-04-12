import React from 'react'
import { BookingForm } from './components'


export function BookingsPage( { date, setDate, time, setTime, availableTimes, setAvailableTimes, guests, setGuests, occasion, setOccasion }, props) {

    return (
        <section>
            <BookingForm date={date} setDate={setDate} time={time} setTime={setTime} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} />
        </section>
    )
}
