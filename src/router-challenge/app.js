import React from 'react';
import AboutMenu from './about-menu';
//5. import Switch and Route from react-router-dom
import {Switch, Route} from 'react-router-dom'


export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            {/* <AboutMenu /> */}
            
            <Switch>
                <Route exact path = '/about/foo/bar'><AboutMenu /></Route>
                <Route exact path = '/about/foo/'><AboutMenu /></Route>
                <Route exact path = '/about/bar'><AboutMenu /></Route>
            </Switch>
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
