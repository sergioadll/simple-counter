import React from "react";
import PropTypes from "prop-types";
import { BsClockHistory } from "react-icons/bs";

//create your first component
export function Counter(props) {
	const { value, left } = props;
	let time = value;
	if (left <= 0 && left > -10 && value[0] == 0) {
		alert("Time is up");
	} else if (left < 0) {
		time = [0, 0, 0, 0];
	}
	return (
		<div className="outter-box d-flex">
			<div className="card clock">
				<BsClockHistory size={100} />
			</div>
			<div className="card housands">{time[3]}</div>
			<div className="card hundreds">{time[2]}</div>
			<div className="card tens">{time[1]}</div>
			<div className="card unit">{time[0]}</div>
		</div>
	);
}
Counter.propTypes = {
	value: PropTypes.array,
	left: PropTypes.number
};
