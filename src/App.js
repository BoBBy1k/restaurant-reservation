import './App.css';
import { MainPage, BookingsPage, ConfirmedBooking } from './pages';
import { TopNavbar, Footer } from './components';
import { Route, Outlet, Routes, useNavigate, } from 'react-router-dom';
import { useState, useReducer } from 'react';
import {fetchAPI, submitAPI} from './mockAPI.js'
// import useFetch from './hooks/useFetch.js'

function App() {
  //Creates initial state for availableTimes
  let currentDate= new Date()
  let formattedDate=  currentDate.toISOString().substring(0,10);
  let initializeTimes = () => {
    // const {loading, error, data } = useFetch('')
    return(fetchAPI(currentDate));
  }

  //Reducer Function specifies how the state gets updated (takes state and action) returns next state
  //Action by convention is an object with a type property { type: 'update_times' }
  let updateTimes = (state, action) => {
    // console.log(action)
    switch (action.type) {
      case 'update_times':
        setDate(action.payload)
        return fetchAPI(new Date(action.payload))
      default:
        return state;
    }
  }

  const navigate = useNavigate();

  let submitForm = (name, date, time, guests, occasion) => {
    navigate('/ConfirmedBooking')
    submitAPI(name, date, time, guests, occasion);
  }

  const [name, setName] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState("3:00 PM");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Standard Dinner");
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())

  // Update the BookingForm component to dispatch the state change when the date form field is changed.
  // Tip: Include the newly selected date in the dispatch parameter.

  const Root = () => {
    return (
      <>
        <TopNavbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<MainPage />} />
            <Route path="/Bookings" element={<BookingsPage name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime} availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} submitForm={submitForm}/>} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime} availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} submitForm={submitForm}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
