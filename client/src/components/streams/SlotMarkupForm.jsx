import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core/';
import { Add as AddIcon } from '@material-ui/icons/';
import { primary } from '../../utils/colors';

const styles = theme => ({
  grid: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
    display: 'flex',
    alignItems: 'center',
    '& div': {
      background: 'none'
    }
  },
  addMarker: {
    background: primary.main,
    color: primary.contrastText,
    '&:hover': {
      background: primary.dark
    },
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  timeInput: {
    width: '50%',
    marginRight: '5px'
  },
  timeTxt: {
    paddingRight: '5px'
  }
});

class SlotMarkupForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={10} className={classes.grid}>
          <Grid container spacing={8}>
            <Grid item xs={7} md={8} className={classes.grid}>
              <Typography
                className={classes.timeTxt}
                variant="subheading"
                component="p"
              >
                Start
              </Typography>
              <TextField
                id="ep-markers-start-min-input"
                variant="outlined"
                fullWidth
                className={classes.timeInput}
                label="min"
                type="number"
                margin="dense"
              />
              <TextField
                id="ep-markers-start-sec-input"
                variant="outlined"
                fullWidth
                className={classes.timeInput}
                label="sec"
                type="number"
                margin="dense"
              />
            </Grid>
            <Grid item xs={5} md={4} className={classes.grid}>
              <Typography
                className={classes.timeTxt}
                variant="subheading"
                component="p"
              >
                Duration
              </Typography>
              <TextField
                id="ep-markers-duration-sec-input"
                variant="outlined"
                fullWidth
                className={classes.timeInput}
                type="number"
                label="sec"
                margin="dense"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <Button
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.addMarker}
          >
            <AddIcon />
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

SlotMarkupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SlotMarkupForm);
