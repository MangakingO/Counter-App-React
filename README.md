# React Increment Buttons

This repository contains a React component called IncrementButtons that demonstrates asynchronous state management.

## Description

The IncrementButtons component includes two buttons: One and Two. Clicking the buttons should update the counter value and display the label of the last button pressed.

- Clicking the One button increments the counter value by 1 and sets the heading to "Last Pressed: One".
- Clicking the Two button increments the counter value by 2 and sets the heading to "Last Pressed: Two".

The implementation of the component uses the useState hook for state management.

## Instructions

To run the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your web browser and visit `http://localhost:3000` to see the application.

## Tips

- If you encounter unexpected results when clicking the buttons, make sure to check the state updates.
- Remember that the setCount function can only be called with the count variable incremented by 1 each time. If you want to increment count by 2, you need to call setCount() twice.

## License

This project is licensed under the [MIT License](LICENSE).
