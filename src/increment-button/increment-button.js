import React from 'react';


//pass in the props to the button
export default function IncrementButton(props) {
    return <button onClick={props.onClick}>Increment</button>;
}

// import React from 'react';

// export default function IncrementButton(props) {
//     return <button>Increment</button>;
// }