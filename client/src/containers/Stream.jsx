import React from 'react';

import PageHeading from '../components/PageHeading';

function Stream({ match }) {
  const {
    params: { id }
  } = match;
  return (
    <div>
      <PageHeading title="Stream" />
      {id}
    </div>
  );
}

export default Stream;
