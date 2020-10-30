//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";

//render your react application
let counter = 0;
setInterval(function() {
	let value = [];
	value[0] = Math.floor(counter) % 10;
	value[1] = Math.floor(counter / 10) % 10;
	value[2] = Math.floor(counter / 100) % 10;
	value[3] = Math.floor(counter / 1000) % 10;
	counter++;
	ReactDOM.render(<Counter value={value} />, document.querySelector("#app"));
}, 1000);
