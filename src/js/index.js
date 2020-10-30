import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./component/counter.js";
import "bootstrap";
import "../styles/index.scss";
//import { Counter } from "./component/counter.js";

let forward = true;
let pause = false;
let seconds = 200;
let counter = 0;
let warningTime = null;

function warning(warningTime) {
	setTimeout(function() {
		alert("Hello");
	}, warningTime);
}

let reloj = setInterval(function() {
	let timer = [];
	timer[0] = Math.floor(seconds) % 10;
	timer[1] = Math.floor(seconds / 10) % 10;
	timer[2] = Math.floor(seconds / 100) % 10;
	timer[3] = Math.floor(seconds / 1000) % 10;
	let value = [];
	value[0] = Math.floor(counter) % 10;
	value[1] = Math.floor(counter / 10) % 10;
	value[2] = Math.floor(counter / 100) % 10;
	value[3] = Math.floor(counter / 1000) % 10;
	if (!pause) {
		counter++;
		seconds--;
	}

	ReactDOM.render(
		<div>
			<div
				className="pointer button bg-success"
				onClick={() => {
					pause = !pause;
				}}>
				{!pause && (
					<span>
						<b>Play</b>
						/Paused
					</span>
				)}
				{pause && (
					<span>
						Play/
						<b>Paused</b>
					</span>
				)}
			</div>{" "}
			<div
				className="pointer button bg-light"
				onClick={() => {
					//alert("OK");
					counter = 0;
					seconds = warningTime;
				}}>
				<b>Reset Time</b>
			</div>
			<div
				className="pointer button bg-primary"
				onClick={() => {
					forward = !forward;
					counter = 0;
					seconds = -1;
				}}>
				{forward && (
					<span>
						<b>Timer</b>
						/Timekeeper
					</span>
				)}
				{!forward && (
					<span>
						Timer/
						<b>Timekeeper</b>
					</span>
				)}
			</div>
			{forward && <Counter value={value} />}
			{!forward && (
				<form className="pointer button bg-warning">
					<label className="pr-1" htmlFor="fname">
						<b>Warning at:</b>
					</label>
					<input
						type="text"
						id="fname"
						name="fname"
						onChange={e => {
							seconds = e.target.value;
							warningTime = e.target.value;
						}}
					/>
				</form>
			)}
			{!forward && <Counter value={timer} left={seconds} />}
		</div>,

		document.querySelector("#app")
	);
}, 1000);

/* STOP AND RESUME FUCTIONS MISSING RESUME TO WORK
			<div
				className="pointer button bg-light"
				onClick={() => {
					//alert("OK");
					clearInterval(reloj);
				}}>
				Stop Time
			</div>

			<div
				className="pointer button bg-dark"
				onClick={() => {
					//alert("OK");
					setInterval(reloj);
				}}>
				Resume Time
			</div>
*/
