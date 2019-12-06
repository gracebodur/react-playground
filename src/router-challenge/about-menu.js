import React from 'react';
//3. import NavLink from react-router-dom
import {NavLink} from 'react-router-dom'

//4. wrap all list items to Link to with each seperate paths
//5. remember to delete ul
export default function AboutMenu(props) {
    return (
        <nav className="about-menu">
                <NavLink to = '/mission'>Our mission</NavLink><br /> 
                <NavLink to = '/values'>Our values</NavLink><br />
                <NavLink to = '/team'>Our team</NavLink><br />
                <NavLink to = '/labradoodles'>Our labradoodles</NavLink><br />
        </nav>
    );
}
