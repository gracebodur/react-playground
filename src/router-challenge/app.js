import React from 'react';
import AboutMenu from './about-menu';
//import Route from react-router-dom
import {Route} from 'react-router-dom'

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            {/* <AboutMenu /> */}
            <Route path='/about/:menu'><AboutMenu /></Route>
        </div>
    );
}


// export default function App(props) {
//     return (
//         <div className="app">
//             {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
//             <AboutMenu />
//         </div>
//     );
// }