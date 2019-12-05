import React from 'react';

export default function Button(props) {
    return <button onClick={() => props.onClick()}>Click me!</button>;
}


//this will fail the test
// class Button extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         }
//         handleClick() {
//             console.log('clicked')
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={this.handleClick}>Click me!</button>
//             </div>
//         )
//     }
// }

// export default Button