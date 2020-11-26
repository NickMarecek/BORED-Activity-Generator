import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "./activityForm.css";
import { getCustomActivity } from "../services/activityService";

class ActivityForm extends Form {
	state = {
		//activity state data
		data: {
			typeArray: [
				"education",
				"recreational",
				"social",
				"diy",
				"charity",
				"cooking",
				"relaxation",
				"music",
				"busywork",
			],
			participants: "",
			price: "",
			accessibility: "",
		},
		searchQuery: "",
		activity: "",
		type: "",
		accessibility: "",
		participants: "",
		price: "",

		errors: {},
	};

	schema = {
		type: Joi.string().required(),
		participants: Joi.number()
			.integer()
			.required()
			.label("Number of participants"),
		price: Joi.number().min(0).max(1).label("Price"),
		accessibility: Joi.number().min(0).max(1).label("accessibility"),
	};

	buildQuery = () => {
		console.log(this.state.data);
		let searchQuery = `?type=${
			this.state.data.typeArray[this.state.data.type]
		}&participants=${this.state.data.participants}`;
		if (this.state.data.price) {
			searchQuery += `&price=${this.state.data.price}`;
		}
		if (this.state.data.accessibility) {
			searchQuery += `&accessibility=${this.state.data.accessibility}`;
		}
		return searchQuery;
	};

	doSubmit = async () => {
		//const query =
		const searchQuery = await this.buildQuery();
		this.setState({ searchQuery });

		try {
			await getCustomActivity(this.state.searchQuery).then((res) => {
				if (!res.data["error"])
					this.setState({
						activity: res.data["activity"],
						type: res.data["type"],
						participants: res.data["participants"],
						price: res.data["price"],
						accessibility: res.data["accessibility"],
					});
				else {
					toast.error("Error! Could not find an activity with these values");
				}
			});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				toast.error("Error! Could not find an activity with these values");
			}
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="formDiv">
					<h1>{this.state.activity}</h1>
					<h3>Type of activity: {this.state.type}</h3>
					<h3>Number of participants: {this.state.participants}</h3>
					<h3>Price: {this.state.price}</h3>
					<h3>Accessibility: {this.state.accessibility}</h3>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="formDiv">
						{this.renderSelect(
							"type",
							"Activity Type",
							this.state.data.typeArray
						)}
						{this.renderInput(
							"price",
							"Price",
							"A factor describing the cost of the event with zero being free [0, 1]"
						)}
						{this.renderInput(
							"participants",
							"Number of Participants",
							"The number of people that this activity could involve [0, n]"
						)}
						{this.renderInput(
							"accessibility",
							"Accessibility",
							"A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]"
						)}
						<button onClick={this.doSubmit}>Find Activity</button>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default ActivityForm;
