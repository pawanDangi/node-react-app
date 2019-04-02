import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core/';

const styles = {
  appBar: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    alignItems: 'center',
    background: '#0D47A1',
    '& div': {
      background: '#0D47A1'
    }
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#0D47A1 !important'
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <AppBar position="absolute" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        &#9400; Copyright {moment().format('YYYY')} Intertrust Technologies
        Corporation. All rights reserved.
      </Toolbar>
    </AppBar>
  );
}

/* eslint react/forbid-prop-types: 0 */
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
