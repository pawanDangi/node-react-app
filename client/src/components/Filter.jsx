import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Button } from '@material-ui/core/';

import ChipList from './ChipList';
import Panel from './Panel';

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('770')]: {
      width: '32%'
    },
    [theme.breakpoints.down('770')]: {
      width: '80%'
    }
  },
  app: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#1656a0'
  },
  buttons: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing.unit,
    width: '50%'
  }
});

class Filter extends React.Component {
  state = {
    open: false,
    filteredData: {}
  };

  toggleDrawer = open => () => {
    this.setState({
      open
    });
  };

  apply = () => {
    const { filteredData } = this.state;
    const { onApply } = this.props;
    if (Object.keys(filteredData).length) {
      this.setState({ filteredData: {} }, () => {
        onApply(filteredData);
      });
    }
    this.toggleDrawer(false)();
  };

  handleClick = key => data => {
    const { filterData } = this.props;
    filterData[key].value = filterData[key].value.map(d => {
      if (data.id === d.id) {
        return {
          ...d,
          selected: !d.selected
        };
      }
      return d;
    });
    this.setState({ filteredData: filterData });
  };

  getList = (data, key) => {
    if (!data) {
      return '';
    }
    if (data.type === 'checkbox') {
      return <ChipList data={data.value} handleClick={this.handleClick(key)} />;
    }
    return '';
  };

  render() {
    const { children, classes, heading, filterData } = this.props;
    const { open } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleDrawer(true)}>
          {children}
        </button>
        <Drawer
          anchor="right"
          open={open}
          onClose={this.toggleDrawer(false)}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.app}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>{heading}</Toolbar>
            </AppBar>
            {Object.keys(filterData).map(key => (
              <Panel panel={key} key={key}>
                <div>{key}</div>
                <div>{this.getList(filterData[key], key)}</div>
              </Panel>
            ))}
          </div>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.apply}
            >
              Apply
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.toggleDrawer(false)}
            >
              Cancel
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  filterData: PropTypes.object.isRequired,
  heading: PropTypes.string,
  onApply: PropTypes.func.isRequired
};

Filter.defaultProps = {
  heading: 'Filter'
};

export default withStyles(styles)(Filter);
