import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField } from '@material-ui/core/';

const styles = () => ({
  grid: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
    display: 'flex',
    alignItems: 'center',
    '& div': {
      background: 'none'
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

class FrequencyMarkupForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} className={classes.grid}>
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
      </React.Fragment>
    );
  }
}

FrequencyMarkupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrequencyMarkupForm);
