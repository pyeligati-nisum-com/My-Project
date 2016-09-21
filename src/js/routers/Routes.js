import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";


import LoginPage from "../components/pages/Login";
// import DashboardLayout from "../components/layouts/Dashboard";
// import DashboardHomePage from "../components/pages/dashboard/Home";
// import DashboardBlankPage from "../components/pages/dashboard/Blank";
// import DashboardTablesPage from "../components/pages/dashboard/Tables";
// import DashboardFormsPage from "../components/pages/dashboard/Forms";
import BaseLayout from "../components/layouts/Base";
var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
        <Route name="base" path="/" handler={BaseLayout}>
          <DefaultRoute name="login" handler={LoginPage} />
          <Redirect from="/" path="/login" to="login" />
        </Route>
      );
    }
  },
  render: function() {

  }

});

export default Routes;
