import React from 'react';

import PageHeading from '../components/PageHeading';
import StreamForm from '../components/streams/StreamForm';

function CreateStream() {
  return (
    <div>
      <PageHeading title="Register DAI Stream" />
      <StreamForm />
    </div>
  );
}

export default CreateStream;
