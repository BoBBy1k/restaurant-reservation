import React from 'react'


export function BookingForm( { date, setDate, time, setTime, availableTimes, setAvailableTimes, guests, setGuests, occasion, setOccasion }, props) {

    return (
        <>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label htmlFor ="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
                <label htmlFor ="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes.map( (item) => {return(<option>{item}:00 PM</option>)}) }
                </select>
                <label htmlFor ="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                <label htmlFor ="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Standard Dinner</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}
