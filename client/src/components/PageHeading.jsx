import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    boxShadow: 'none'
  }
});

function PageHeading(props) {
  const { classes, title } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
      </Paper>
    </div>
  );
}

PageHeading.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(PageHeading);
