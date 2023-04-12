import './App.css';
import { MainPage, BookingsPage } from './pages';
import { TopNavbar, Footer } from './components';
import { Route, RouterProvider, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useState, useReducer } from 'react';

function App() {
  const defaultTimes=[3,4,5,6,7,8]

  const [date, setDate] = useState();
  const [time, setTime] = useState("3:00 PM");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Standard Dinner");
  const [availableTimes, setAvailableTimes] = useState(defaultTimes)
  // const [availableTimes, setAvailableTimes] = useReducer(defaultTimes)

  // The next step is to prepare the available times to be updated based on the date the user has selected. To do this, you will change the availableTimes state to a reducer.

  // In the Main component, create a function named updateTimes which will handle the state change. This function will change the availableTimes based on the selected date. For now, the function can return the same available times regardless of the date.

  // Next, create a function called initializeTimes which will create the initial state for the availableTimes.

  // Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.

  // Update the BookingForm component to dispatch the state change when the date form field is changed.

  // Tip: Include the newly selected date in the dispatch parameter.
  
  let initializeTimes = () => {
    return defaultTimes;
  }

  let updateTimes = (changedTime) => {
    // setAvailableTimes()
  }

  const Root = () => {
    return (
      <>
        <TopNavbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="/Bookings" element={<BookingsPage date={date} setDate={setDate} time={time} setTime={setTime} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion}/>}>
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
