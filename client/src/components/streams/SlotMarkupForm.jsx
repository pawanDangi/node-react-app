import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core/';
import { Add as AddIcon } from '@material-ui/icons/';
import { Clear as ClearIcon } from '@material-ui/icons/';
import { reduce } from 'lodash';

import snackbar from '../../utils/snackbar';
import { primary, error } from '../../utils/colors';

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
  removeMarker: {
    background: error.main,
    color: error.contrastText,
    '&:hover': {
      background: error.dark
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
  state = {
    adSlotsMili: [],
    min: '',
    sec: '',
    duration: ''
  };

  handleChange = key => e =>
    this.setState({ [key]: Number(e.target.value) || 0 });

  addAdSlotMili = () => {
    const { min, sec, duration } = this.state;
    if ((!min && !sec) || !duration) {
      snackbar({
        variant: 'error',
        message: `${
          !min && !sec
            ? 'Please provide ad start time'
            : 'Please provide ad duration'
        }`
      });
      return;
    }
    let { adSlotsMili } = this.state;
    const start = (min * 60 + sec) * 1000;

    adSlotsMili = reduce(
      adSlotsMili,
      (result, s) => {
        if (!(s.start === start)) {
          result.push(s);
          return result;
        }
        return result;
      },
      []
    );

    adSlotsMili.push({ start, duration: duration * 1000 });
    this.setState({ adSlotsMili, min: '', sec: '', duration: '' }, () => {
      const { setMarkupValue } = this.props;
      setMarkupValue({ adSlotsMili });
    });
  };

  getMinutes = miliSec => Math.floor(miliSec / 1000 / 60);

  getSeconds = miliSec => {
    const sec = miliSec / 1000;
    return sec - Math.floor(sec / 60) * 60;
  };

  removeMarker = start => {
    let { adSlotsMili } = this.state;
    adSlotsMili = reduce(
      adSlotsMili,
      (result, s) => {
        if (!(s.start === start)) {
          result.push(s);
          return result;
        }
        return result;
      },
      []
    );
    this.setState({ adSlotsMili }, () => {
      const { setMarkupValue } = this.props;
      setMarkupValue({ adSlotsMili });
    });
  };

  render() {
    const { classes } = this.props;
    const { min, sec, duration, adSlotsMili } = this.state;
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
                value={min}
                inputProps={{ min: 0, step: 1 }}
                onChange={this.handleChange('min')}
              />
              <TextField
                id="ep-markers-start-sec-input"
                variant="outlined"
                fullWidth
                className={classes.timeInput}
                label="sec"
                type="number"
                margin="dense"
                value={sec}
                inputProps={{ min: 0, max: 59, step: 1 }}
                onChange={this.handleChange('sec')}
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
                value={duration}
                onChange={this.handleChange('duration')}
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
            onClick={this.addAdSlotMili}
          >
            <AddIcon />
          </Button>
        </Grid>
        {adSlotsMili.map((s, i) => {
          return (
            <React.Fragment key={i}>
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
                      disabled
                      id="ep-markers-start-min-show"
                      variant="outlined"
                      fullWidth
                      className={classes.timeInput}
                      label="min"
                      type="number"
                      margin="dense"
                      value={this.getMinutes(s.start)}
                    />
                    <TextField
                      disabled
                      id="ep-markers-start-sec-show"
                      variant="outlined"
                      fullWidth
                      className={classes.timeInput}
                      label="sec"
                      type="number"
                      margin="dense"
                      value={this.getSeconds(s.start)}
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
                      disabled
                      id="ep-markers-duration-sec-show"
                      variant="outlined"
                      fullWidth
                      className={classes.timeInput}
                      type="number"
                      label="sec"
                      margin="dense"
                      value={s.duration / 1000}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} className={classes.grid}>
                <Button
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes.removeMarker}
                  onClick={() => this.removeMarker(s.start)}
                >
                  <ClearIcon />
                </Button>
              </Grid>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

SlotMarkupForm.propTypes = {
  classes: PropTypes.object.isRequired,
  setMarkupValue: PropTypes.func.isRequired
};

export default withStyles(styles)(SlotMarkupForm);
