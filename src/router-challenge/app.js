import React from 'react';
import AboutMenu from './about-menu';
//5. import Route from react-router-dom
import {Route} from 'react-router-dom'


//6. wrap make path dynamic using the : colon, 
//then wrap <AppMenu /> component in Route
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