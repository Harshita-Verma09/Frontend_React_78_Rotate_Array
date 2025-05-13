# Rotate Array Left React Component

This React component allows users to input an array of numbers and rotate it to the left by a specified number of positions.

## Features

-   **Input Array:** Users can enter an array of numbers as a comma-separated string.
-   **Rotation Count:** Users can specify the number of positions to rotate the array to the left.
-   **Left Rotation:** Implements an efficient algorithm using array reversal to perform the left rotation.
-   **Error Handling:** Provides basic error handling for invalid array input.
-   **Clear Output:** Displays the rotated array in a user-friendly format.
-   **Styled with Tailwind CSS:** Uses Tailwind CSS for a clean and responsive design.

## How to Use

1.  **Installation:** If you haven't already, ensure you have Node.js and npm (or yarn) installed in your development environment. Then, install the necessary dependencies for your React project, including Tailwind CSS if you haven't set it up yet.

    ```bash
    npm install react react-dom tailwindcss postcss autoprefixer
    # or
    yarn add react react-dom tailwindcss postcss autoprefixer
    ```

    Make sure to configure Tailwind CSS in your `postcss.config.js` and include it in your main CSS file (e.g., `index.css` or `App.css`).

2.  **Include the Component:** Copy the `Rotate.js` code into your React project's components directory (or any other relevant location).

3.  **Import and Render:** Import the `Rotate` component into the React component where you want to use it and then render it.

    ```jsx
    import React from 'react';
    import Rotate from './components/Rotate'; // Adjust the path as needed

    function App() {
      return (
        <div className="container mx-auto p-4">
          <Rotate />
        </div>
      );
    }

    export default App;
    ```

4.  **Run Your Application:** Start your React development server.

    ```bash
    npm start
    # or
    yarn start
    ```

    Open your browser to the address where your React application is running (usually `http://localhost:3000`). You should see the "Rotate Array Left" component.

## How it Works

The component uses the following steps to perform the left rotation:

1.  **Input Handling:**
    -   The `inputArr` state stores the user's input as a comma-separated string.
    -   The `d` state stores the number of positions to rotate.
    -   Input fields allow the user to modify these states.

2.  **Array Conversion:**
    -   When the "Rotate" button is clicked, the `handleRotate` function is called.
    -   The `inputArr` string is split by commas, trimmed to remove whitespace, and converted to an array of numbers using `map(Number)`.
    -   Invalid number inputs are filtered out using `filter(val => !isNaN(val))`.

3.  **Rotation Logic (`rotateLeft` function):**
    -   The function takes the array (`arr`) and the rotation count (`d`) as input.
    -   It calculates the effective rotation count by taking the modulo of `d` with the array length (`n`). This handles cases where `d` is greater than the array length.
    -   It utilizes a `reverse` helper function to reverse a portion of the array in place.
    -   The `rotateLeft` function implements the following three reversal steps:
        1.  Reverse the first `d` elements.
        2.  Reverse the remaining `n - d` elements.
        3.  Reverse the entire array.
    -   This sequence of reversals effectively rotates the array to the left by `d` positions.

4.  **Output:**
    -   The `rotatedArr` state is updated with the result of the `rotateLeft` function.
    -   The rotated array is then displayed on the screen as a comma-separated string.

## Example

1.  Enter the array: `1,2,3,4,5`
2.  Enter the rotation count: `2`
3.  Click "Rotate"
4.  The output will be: `Rotated Array: 3, 4, 5, 1, 2`

## Contributing

Feel free to contribute to this component by submitting issues or pull requests.

## License

[MIT](LICENSE) (Replace with your actual license if applicable)
