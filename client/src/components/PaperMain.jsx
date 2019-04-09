import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';

const styles = theme => ({
  root: {
    marginTop: '30px',
    '& div': {
      background: 'none'
    }
  },
  page: {
    ...theme.mixins.gutters(),
    width: '98%',
    margin: '1%',
    padding: '10px !important'
  }
});

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
