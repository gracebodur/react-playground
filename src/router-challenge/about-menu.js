import React from 'react';
//3. import NavLink from react-router-dom
// import {NavLink} from 'react-router-dom'

//4. wrap all list items to Link to with each seperate paths
//5. remember to delete ul
export default function AboutMenu(props) {
    return (
        <nav className="about-menu">
            <ul>
                <li>Our mission</li>
                <li>Our values</li>
                <li>Our team</li>
                <li>Our labradoodles</li>
            </ul>
        </nav>
    );
}
