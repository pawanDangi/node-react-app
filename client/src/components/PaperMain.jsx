import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';

import styles from '../css/paper-main';

class PaperMain extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PaperMain);
