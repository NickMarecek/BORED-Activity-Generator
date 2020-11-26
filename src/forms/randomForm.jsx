import React, { Component } from "react";
import "./randomForm.css";
import { getRandomActivity } from "../services/activityService";

class RandomForm extends Component {
	constructor(props) {
		super(props);
		this.randomActivity = this.randomActivity.bind(this);
		this.state = {
			activity: "",
			type: "",
			participants: "",
		};
	}

	async componentDidMount() {
		this.randomActivity();
	}

	async randomActivity() {
		await getRandomActivity().then((res) => {
			this.setState({
				activity: res.data["activity"],
				type: res.data["type"],
				participants: res.data["participants"],
			});
		});
	}

	render() {
		return (
			<div className="formDiv">
				<h1>{this.state.activity}</h1>
				<h3>Type of activity: {this.state.type}</h3>
				<h3>Number of participants: {this.state.participants}</h3>
				<button onClick={this.randomActivity}>Random Activity</button>
			</div>
		);
	}
}

export default RandomForm;
