import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Input
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: '#f4f4f4',
    fontSize: '18px'
  },
  textField: {
    background: '#fff'
  },
  buttons: {
    textAlign: 'right'
  },
  button: {
    margin: theme.spacing.unit,
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  }
});

function StreamForm(props) {
  const { classes } = props;

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={0}>
            <FormControl fullWidth>
              <InputLabel htmlFor="component-simple">Url</InputLabel>
              <Input id="component-simple" />
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

StreamForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(StreamForm);
