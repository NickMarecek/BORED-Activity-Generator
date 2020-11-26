import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ActivityForm from "./forms/activityForm";
import RandomForm from "./forms/randomForm";
import Landing from "./forms/landing";
import NotFound from "./forms/notFound";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<ToastContainer />
			<main className="container">
				<Switch>
					<Route path="/activity" component={ActivityForm}></Route>
					<Route path="/random" component={RandomForm}></Route>
					<Route path="/landing" component={Landing}></Route>
					<Route path="/not-found" component={NotFound}></Route>
					<Redirect from="/" exact to="/landing" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
