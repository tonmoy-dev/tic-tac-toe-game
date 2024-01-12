import { useState } from "react";

// Square component
function Square() {
  // this component takes the props here
  // const {value} = props;   // using object destructuring we have got the actual value

  const [value, setValue] = useState(null);
  // at first, value will be null, then after clicking the button, it will be changed by the setValue function.
  // react re-renders the JSX when, we change the state value by any interactions.

  // event handler function
  function handleClick() {
    // console.log("clicked!");
    setValue("X");
  }
  return (
    <button
      className="bg-white border border-gray-200 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// Board component
export default function Board() {
  return (
    <>
      {/* We need 9 squares to build the game */}
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />

        {/* Here, the props are passing as objects to the Square component */}
        {/* It is passing data from parent to child component */}
        {/* <Square value={1} /> */}
      </div>
    </>
  );
}

// A react component -- Under the hood, it is a JS function

// here exporting the function means, modular exports of this file
// it is a default export for the app component
// export default function App() {
//   // component body

//   // here, return statement normally returns JSX for any react component
//   return (
//     <>
//       {/* JSX syntax in the component return part */}
//       <h1 className="text-2xl font-bold">Hello Tic Tac Toe</h1>
//     </>
//   );
// }

// A React component can return a single JSX. So, returning the more JSX elements, we need to wrap all the JSX elemlents.
// In JSX,
// the curly braces {} is the open window for JavaScript in JSX; We can write any JS expression inside it.
// We can use Fragments for that problem -- <> </>
// To avoid repeatitive tasks or codes, we need to create child components for the parent component. And then the parent and child components can pass data (props) or communicate with each other.

/*
In function,

function functionName(parameters){
  // function body
  return;
}
functionName(arguments);
*/

// props -- properties
// state -- a component's memory --- useState hook in react

/* useState hook
// const [state, setState] = useState(initialValue);

const [value, setValue] = useState(null);
  // at first, value will be null, then after occuring any event, it will be changed by the setValue function.
  // react re-renders the JSX when, we change this state value by any interactions.
*/
