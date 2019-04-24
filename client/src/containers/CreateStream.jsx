import React, { Component } from 'react';

import { validateStream } from '../api/streams';
import StreamForm from '../components/streams/StreamForm';
import loader from '../utils/loader';

class CreateStream extends Component {
  state = {
    streamData: {}
  };
  validateStream = async url => {
    loader(true);
    const { data } = await validateStream('', url);
    const { streamData } = this.state;
    this.setState({ streamData: { ...streamData, ...data } }, () => {
      setTimeout(() => {
        loader(false);
      }, 1000);
    });
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
