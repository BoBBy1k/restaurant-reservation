import { render, screen } from "@testing-library/react";
import { BookingForm } from './BookingForm.jsx';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Number of Guests");
    expect(headingElement).toBeInTheDocument();
})