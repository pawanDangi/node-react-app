import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AppHeader from './header-footer/HeaderFooter';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import VerifyPassword from './containers/VerifyPassword';
import ContactUs from './containers/ContactUs';
import Dashboard from './containers/Dashboard';
import Performance from './containers/Performance';
import Streams from './containers/Streams';
import Stream from './containers/Stream';
import CreateStream from './containers/CreateStream';
import Demands from './containers/Demands';
import CreateDemand from './containers/CreateDemand';

const Routes = ({ cookies }) => (
  <Router>
    <AppHeader>
      {cookies && cookies.epasso ? (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/verify-password" component={VerifyPassword} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/performance" component={Performance} />
          <Route exact path="/streams" component={Streams} />
          <Route exact path="/streams/create" component={CreateStream} />
          <Route exact path="/streams/:id" component={Stream} />
          <Route exact path="/demands" component={Demands} />
          <Route exact path="/demands/create" component={CreateDemand} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      ) : (
        ''
      )}
    </AppHeader>
  </Router>
);

const mapStateToProps = state => ({
  cookies: state.cookies
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
