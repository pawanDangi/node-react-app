import React, { Component } from 'react';

import { validateStream } from '../api/streams';
import StreamForm from '../components/streams/StreamForm';

class CreateStream extends Component {
  state = {
    streamData: {}
  };
  validateStream = async url => {
    const { data } = await validateStream('', url);
    const { streamData } = this.state;
    this.setState({ streamData: { ...streamData, ...data } });
  };

  render() {
    const { streamData } = this.state;

    return (
      <StreamForm
        validateStream={this.validateStream}
        streamData={streamData}
      />
    );
  }
}

export default CreateStream;
