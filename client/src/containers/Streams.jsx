import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import PageHeading from '../components/PageHeading';
import StreamsHeader from '../components/streams/StreamsHeader';
import StreamTable from '../components/streams/StreamTable';
import { fetchStreams, updateStream } from '../api/streams';
import columns from '../columns/Streams';
import alert from '../utils/alert';

class Streams extends Component {
  state = {
    loading: true,
    pageSize: 50,
    page: 0,
    pages: 0,
    search: '',
    sortBy: [
      {
        id: 'id',
        desc: false
      }
    ],
    streams: []
  };

  async componentWillMount() {
    await this.fetchStreamsData();
  }

  fetchStreamsData = async () => {
    this.setState({ loading: true });
    const {
      cookies: { epasso }
    } = this.props;
    const { page, pageSize, sortBy, search } = this.state;
    const sortString = sortBy[0].desc ? `-${sortBy[0].id}` : sortBy[0].id;
    const res = await fetchStreams(epasso, page, pageSize, sortString, search);
    this.setState({
      loading: false,
      streams: res || [],
      pages: Math.ceil((get(res, 'data.total_count') || 0) / pageSize)
    });
  };

  onFetchData = state => {
    const { pageSize, page, sortBy } = this.state;
    if (
      pageSize !== state.pageSize ||
      page !== state.page ||
      JSON.stringify(state.sorted) !== JSON.stringify(sortBy)
    ) {
      const size = state.pageSize < 0 ? 0 : state.pageSize;
      this.setState(
        { pageSize: size, page: state.page, sortBy: state.sorted },
        () => {
          this.fetchStreamsData();
        }
      );
    }
  };

  onSearch = event => {
    const { search } = this.state;
    const {
      target: { value }
    } = event;
    if (search !== value) {
      this.setState({ search: value }, async () => {
        await this.fetchStreamsData();
      });
    }
  };

  onStatusChange = stream => {
    const {
      cookies: { epasso }
    } = this.props;
    const { id, status } = stream;
    alert({
      title: 'Confirm',
      text: `Do you really want to ${
        status ? 'disable' : 'enable'
      } this stream?`,
      handleSuccess: async () => {
        await updateStream(epasso, id, { status: !status });
        this.fetchStreamsData();
      }
    });
  };

  render() {
    const { streams, loading, pages, pageSize, sortBy } = this.state;
    return (
      <div>
        <PageHeading title="Streams" />
        <StreamsHeader onSearch={this.onSearch} />
        <StreamTable
          data={streams}
          defaultPageSize={pageSize}
          columns={columns(sortBy[0], this.onStatusChange)}
          pages={pages}
          loading={loading}
          onFetchData={this.onFetchData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cookies: state.cookies
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Streams);
