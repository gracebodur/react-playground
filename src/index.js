import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//1.install react-router-dom npm i react-router-dom
//2. import BrowserRouter then wrap <App /> 
import {BrowserRouter} from 'react-router-dom'
// import App from './playingwithdanger/App'
// import RegistrationForm from './registrationForm/registrationForm'
// import AppLang from "./lang-context/AppLang";
// import App from './paltrows-power-toes/App'
// import Bomb from "./state-drills/RouletteGun";
// import RouletteGun from "./state-drills/RouletteGun";
// import Button from './buttonclick/Button'
// import App from './increment-button/app'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { searchRobots } from "./reducers"
import 'tachyons'
import App from './App'

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
<BrowserRouter>
    <Provider store = {store}>
        <App  />
    </Provider>
</BrowserRouter>, document.getElementById("root"));



