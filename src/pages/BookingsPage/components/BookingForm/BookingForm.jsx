import React from 'react'
import { useState } from 'react'
import { LemonButton } from "../../../../components/"
import './BookingForm.css'

export function BookingForm( { name, setName, date, setDate, time, setTime, availableTimes, dispatchAvailableTimes, guests, setGuests, occasion, setOccasion, submitForm}, props) {

    return (
            <form key="booking-container" className="booking-container">
                <label className ="bookinglabel" htmlFor ="res-name">Reservation Name</label>
                <input key="NameFieldNeedsFocusFixing" type="text" id="res-name" value={name} onChange={e => setName(e.target.value)} autoFocus="autoFocus"/>
                <label className ="bookinglabel" htmlFor ="res-date">Date</label>
                <input type="date" id="res-date" value={date} onChange={e => dispatchAvailableTimes({type: 'update_times', payload: e.target.value}) } />
                <label className ="bookinglabel" htmlFor ="res-time">Available Times</label>
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    {
                    availableTimes 
                    ? availableTimes.map( (item,index) => 
                        {  
                            // console.log(item) Needs to parse both sides of the semicolon using regex - implement later
                            // let usTime = parseFloat(item) - 12 + "PM"
                            return(<option key={index}>{item}</option>)
                        }) 
                    : null 
                    }
                </select>
                <label className ="bookinglabel" htmlFor ="guests">Number of Guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                <label className ="bookinglabel" htmlFor ="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} style={{marginBottom:"50px"}}>
                    <option>Standard Dinner</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                {   name 
                    ? <LemonButton text={"Reserve Table!"} onClick={(e)=>{e.preventDefault(); submitForm(name, date, time, guests, occasion)}}/>
                    : <LemonButton text={"Reserve Table!"} disabled={true} />
                }
                    
                {/* <input type="submit" value="Make Your reservation" onClick={(e)=>{e.preventDefault(); submitForm(date, time, guests, occasion)}} to="/ConfirmedBooking"/> */}
            </form>
    )
}
