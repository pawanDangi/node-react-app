import React, { Component } from 'react';

import PageHeading from '../components/PageHeading';
import DashboardGraph from '../components/dashboard/DashboardGraph';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div>
        <PageHeading title="Dashboard" />
        <DashboardGraph />
      </div>
    );
  }
}

export default Dashboard;
