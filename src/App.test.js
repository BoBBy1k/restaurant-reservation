// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.js';
// import initializeTimes from './App.js';

// test("Adds one", () => {
//   // render the App component
//   render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   ); 
//   console.log(initializeTimes())
//   expect(initializeTimes()).toBe([]);
//   // save the heading in a variable
//   // const heading = screen.getByTestId("currentNumber"); 
  
//   // save the button in a variable
//   // const btn = screen.getByTestId("addOne"); 
  
//   // test assumption
//   // expect(heading).toHaveTextContent("2");
// });


// initializeTimes 

// // initializeTimes and updateTimes.
// // Step 1: Update the test for initializeTimes

// // Now that the initializeTimes function calls the fetchAPI function, 
// // the unit tests need to be updated. In fact, if you run the tests now, you will discover that the existing test is failing. 
// // For testing purposes, the fetchAPI function will return a non-empty array of available booking times.

// // Step 2: Update the test for updateTimes

// // Similar to the previous step, the test you previously created for updateTimes will fail. You will need to update the test to include a pre-selected date as part of the dispatch data.
// // Step 3: Run the tests

// // Run all unit tests and verify that they are succeeding.