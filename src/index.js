import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import AppLang from "./lang-context/AppLang";
import {BrowserRouter} from 'react-router-dom'

// import Bomb from "./state-drills/RouletteGun";
// import RouletteGun from "./state-drills/RouletteGun";

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
 document.getElementById("root"));
