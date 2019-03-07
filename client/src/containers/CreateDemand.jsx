import React from 'react';

import PageHeading from '../components/PageHeading';
import DemandForm from '../components/demands/DemandForm';

function CreateDemand() {
  return (
    <div>
      <PageHeading title="Create Demand" />
      <DemandForm />
    </div>
  );
}

export default CreateDemand;
