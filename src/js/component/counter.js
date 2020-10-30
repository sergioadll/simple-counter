import React from "react";
import PropTypes from "prop-types";
import { BsClockHistory } from "react-icons/bs";

//create your first component
export function Counter(props) {
	const { value } = props;
	return (
		<div className="outter-box d-flex">
			<div className="card clock">
				<BsClockHistory size={100} />
			</div>
			<div className="card housands">{value[3]}</div>
			<div className="card hundreds">{value[2]}</div>
			<div className="card tens">{value[1]}</div>
			<div className="card unit">{value[0]}</div>
		</div>
	);
}
Counter.propTypes = {
	value: PropTypes.array
};
