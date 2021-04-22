import React, { Component } from "react";

import classnames from "classnames";

class Dashboard extends Component {
  state = { loading: true };
  render() {
    const dashboardClasses = classnames("dashboard");

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
