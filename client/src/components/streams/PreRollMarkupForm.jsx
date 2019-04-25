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

class PreRollMarkupForm extends Component {
  state = {
    status: 0,
    adPodDuration: ''
  };

  handleChange = key => e => {
    this.setState({ [key]: Number(e.target.value) || 0, status: 1 }, () => {
      const { status, adPodDuration } = this.state;
      const { setMarkupValue } = this.props;
      setMarkupValue({
        status,
        adPodDuration: adPodDuration * 1000
      });
    });
  };

  render() {
    const { classes } = this.props;
    const { adPodDuration } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} className={classes.grid}>
          <Grid container spacing={8}>
            <Grid item xs={8} className={classes.grid}>
              <Typography
                className={classes.timeTxt}
                variant="subheading"
                component="p"
              >
                Duration
              </Typography>
              <TextField
                id="ep-markers-pre-roll-duration-sec-input"
                variant="outlined"
                fullWidth
                className={classes.timeInput}
                label="sec"
                type="number"
                margin="dense"
                value={adPodDuration}
                inputProps={{ min: 0, step: 1 }}
                onChange={this.handleChange('adPodDuration')}
              />
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

PreRollMarkupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PreRollMarkupForm);
