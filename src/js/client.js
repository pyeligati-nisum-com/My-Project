import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, DefaultRoute, Redirect } from "react-router";

import Archives from "./pages/Archives";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import LoginPage from "./pages/Login";
// import DashboardLayout from "../components/layouts/Dashboard";
// import DashboardHomePage from "../components/pages/dashboard/Home";
// import DashboardBlankPage from "../components/pages/dashboard/Blank";
// import DashboardTablesPage from "../components/pages/dashboard/Tables";
// import DashboardFormsPage from "../components/pages/dashboard/Forms";
import BaseLayout from "./components/layout/Base";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
	  <Route name="base" path="/" handler={BaseLayout}>
	      <Route >
	        <IndexRoute component={Home}></IndexRoute>
		    <Route path="archives(/:article)" name="archives" component={Archives}></Route>
		    <Route path="settings" name="settings" component={Settings}></Route>
	      </Route>

	      <DefaultRoute name="login" handler={LoginPage} />
	      <Redirect from="/" path="/login" to="login" />
	  </Route>
  </Router>,
app);
