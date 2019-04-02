import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import {
  Dashboard as DashboardIcon,
  Settings as SettingIcon,
  ViewStream as StreamIcon,
  OndemandVideo as DemandIcons
} from '@material-ui/icons/';

const pages = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon style={{ fontSize: 30 }} />
  },
  {
    text: 'Streams',
    path: '/streams',
    icon: <StreamIcon style={{ fontSize: 30 }} />
  },
  {
    text: 'Demands',
    path: '/demands',
    icon: <DemandIcons style={{ fontSize: 30 }} />
  },
  {
    text: 'Setting',
    path: '/setting',
    isBottom: true,
    icon: <SettingIcon style={{ fontSize: 30 }} />
  }
];

const styles = {
  list: {
    height: '100%'
  },
  link: {
    letterSpacing: '1px',
    color: 'white',
    display: 'flex',
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit'
    }
  },
  text: {
    paddingTop: '4px'
  },
  setting: {
    position: 'absolute',
    borderTop: '1px solid rgba(0, 0, 0, 0.54)'
  },
  desktop: {
    bottom: '70px'
  },
  mobile: {
    bottom: '5px'
  }
};

const AppPages = ({ classes, location, isMobile }) => (
  <List className={classes.list}>
    {pages.map(page => (
      <ListItem
        button
        key={page.text}
        className={classNames({
          [classes.setting]: page.isBottom,
          [classes.desktop]: page.isBottom && !isMobile,
          [classes.mobile]: page.isBottom && isMobile
        })}
      >
        <NavLink
          to={page.path}
          className={classNames(classes.link)}
          activeStyle={{ color: '#1998db' }}
        >
          <ListItemIcon
            style={{ color: location.pathname === page.path ? '#000' : '' }}
          >
            {page.icon}
          </ListItemIcon>
          <ListItemText className={classes.text} primary={page.text} />
        </NavLink>
      </ListItem>
    ))}
  </List>
);

/* eslint react/forbid-prop-types: 0 */
AppPages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(props => <AppPages {...props} />));
