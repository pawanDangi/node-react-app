import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core/';
import { Menu as MenuIcon } from '@material-ui/icons/';

import pgLogo from '../icons/PG_Axis_Logo.png';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#0D47A1',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolBar: {
    padding: '0px 2px'
  },
  menuButton: {
    margin: 0,
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    }
  },
  logo: {
    width: '115px'
  }
});

function Header(props) {
  const { classes, open, handleDrawer } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawer}
          className={classNames(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <Typography color="inherit">
          <img alt="Header Icon" src={pgLogo} className={classes.logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

/* eslint react/forbid-prop-types: 0 */
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
