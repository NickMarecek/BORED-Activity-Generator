import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
const Landing = () => {
	return (
		<div className="formDiv">
			<h1>Bored?</h1>
			<h2>Find an activity now</h2>
			<Link to="/random">
				<button>Random Activity</button>
			</Link>
			<div className="divider" />
			<Link to="/activity">
				<button>Custom Activity</button>
			</Link>
		</div>
	);
};

export default Landing;
