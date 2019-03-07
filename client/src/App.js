import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from './components/Loading';
import SnackbarAlert from './components/SnackbarAlert';
import AlertDialog from './components/AlertDialog';
import Routes from './Routes';
import getCookies from './utils/get-cookie';
import { addCookies } from './actions';

class App extends Component {
  async componentWillMount() {
    const cookies = await getCookies();
    const { setCookies } = this.props;
    await setCookies(cookies);
  }

  render() {
    return (
      <div>
        <Loading />
        <SnackbarAlert />
        <AlertDialog />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setCookies: cookies => dispatch(addCookies(cookies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
