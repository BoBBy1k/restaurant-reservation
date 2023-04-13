import React from 'react'
import { useState } from 'react'
import { LemonButton } from "../../../../components/"
import './BookingForm.css'

export function BookingForm( { name, setName, date, setDate, time, setTime, availableTimes, dispatchAvailableTimes, guests, setGuests, occasion, setOccasion, submitForm}, props) {
    let currentDate= new Date();
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1)).toISOString().split('T')[0];
    
    return (
            <form key="booking-container" className="booking-container">
                {name 
                    ? <label className ="bookinglabel" htmlFor ="res-name">Reservation Name</label>
                    : <label className ="bookinglabel" htmlFor ="res-name" style={{color:"red"}}>- Reservation Name -</label>
                }
                <input key="NameFieldNeedsFocusFixing" type="text" id="res-name" value={name} onChange={e => setName(e.target.value)} autoFocus="autoFocus"/>
                {date 
                    ? <label className ="bookinglabel" htmlFor ="res-date">Date</label>
                    : <label className ="bookinglabel" htmlFor ="res-date" style={{color:"red"}}>- Date -</label>
                }
                <input type="date" min={currentDate} id="res-date" value={date} onChange={e => dispatchAvailableTimes({type: 'update_times', payload: e.target.value}) } />
                {time 
                    ? <label className ="bookinglabel" htmlFor ="res-time">Available Times</label>
                    : <label className ="bookinglabel" htmlFor ="res-time" style={{color:"red"}}>- Available Times -</label>
                }
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    { availableTimes ? availableTimes.map( (item,index) => { return(<option key={index}>{item}</option>) }) : null }
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
