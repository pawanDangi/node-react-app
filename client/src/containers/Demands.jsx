import React, { Component } from 'react';

import PageHeading from '../components/PageHeading';
import DemandsHeader from '../components/demands/DemandsHeader';

class Demands extends Component {
  state = {};

  render() {
    return (
      <div>
        <PageHeading title="Demands" />
        <DemandsHeader />
      </div>
    );
  }
}

export default Demands;
