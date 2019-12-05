import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // this.handleClick = this.handleClick.bind(this)
    }

    //add and bind the event handler or arrow function and setState() 
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    //pass the event handler to the component
    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton onClick={this.handleClick}/>
            </div>
        );
    }
}


// import React from 'react';
// import IncrementButton from './increment-button';

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div className="parent">
//                 <div className="count">
//                     Number of clicks: {this.state.count}
//                 </div>
//                 <IncrementButton />
//             </div>
//         );
//     }
// }