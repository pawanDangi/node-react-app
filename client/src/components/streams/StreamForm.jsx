import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Fab
} from '@material-ui/core/';
import { Add as AddIcon } from '@material-ui/icons/';
import className from 'class-names';

import { background, text, primary } from '../../utils/colors';

const styles = theme => ({
  root: {
    '& div': {
      background: background.paper
    }
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: '0 5%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      margin: '0 5%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 10%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: '0 15%'
    },
    padding: '15px !important'
  },
  heading: {
    borderBottom: `2px solid ${text.disabled}`,
    paddingBottom: 20,
    fontSize: '18px'
  },
  title: {
    padding: '10px 0px !important',
    color: primary.light,
    fontWeight: 600,
    fontSize: '18px'
  },
  form: {
    padding: '20px 0 0'
  },
  grid: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    margin: 0
  },
  validate: {
    alignItems: 'center',
    display: 'flex'
  },
  validateBtn: {
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
    width: '50px',
    marginRight: '5px'
  },
  timeTxt: {
    paddingRight: '5px'
  },
  or: {
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${text.disabled}`,
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    paddingTop: '15px',
    fontSize: '15px',
    '& span': {
      background: primary.contrastText,
      color: `${text.disabled}`,
      padding: '0 10px'
    }
  }
});

class StreamForm extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.page} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Register Stream
          </Typography>
          <form className={classes.form} autoComplete="off">
            <Grid container spacing={8}>
              <Grid item xs={12} className={classes.grid}>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.title}
                >
                  STREAM DETAILS
                </Typography>
              </Grid>
              <Grid item sm={10} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="name-input"
                  label="Name (Optional)"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={10} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="url-input"
                  label="Url"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                sm={2}
                xs={12}
                className={className(classes.validate, classes.grid)}
              >
                <Button variant="contained" className={classes.validateBtn}>
                  Validate
                </Button>
              </Grid>
              <Grid item sm={10} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="domain-input"
                  label="Domain or Bundle (Optional)"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={5} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="format-input"
                  label="Format"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  select
                  value={''}
                >
                  <MenuItem key={'hls'} value={'HLS'}>
                    HLS
                  </MenuItem>
                  <MenuItem key={'dash'} value={'DASH'}>
                    DASH
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={5} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="type-input"
                  label="Type"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  select
                  value={''}
                >
                  <MenuItem key={'vod'} value={'vod'}>
                    VOD
                  </MenuItem>
                  <MenuItem key={'live'} value={'live'}>
                    LIVE
                  </MenuItem>
                  <MenuItem key={'event'} value={'event'}>
                    EVENT
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={10} xs={12} className={classes.grid}>
                <TextField
                  className={classes.textField}
                  id="tags-input"
                  label="Tags (Optional)"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.grid}>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.title}
                >
                  AD MARKUPS
                </Typography>
              </Grid>
              <Grid item md={2} xs={12} className={classes.grid}>
                <Typography variant="subheading" component="p">
                  EP MARKERS :
                </Typography>
              </Grid>
              <Grid item md={8} xs={10} className={classes.grid}>
                <Grid container spacing={8}>
                  <Grid item xs={6} className={classes.grid}>
                    <Typography
                      className={classes.timeTxt}
                      variant="subheading"
                      component="p"
                    >
                      START
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
                  <Grid item xs={6} className={classes.grid}>
                    <Typography
                      className={classes.timeTxt}
                      variant="subheading"
                      component="p"
                    >
                      DURATION
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
                <Fab
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes.addMarker}
                >
                  <AddIcon />
                </Fab>
              </Grid>
              <Grid item md={2} xs={12} className={classes.grid} />
              <Grid item md={8} xs={10} className={classes.grid}>
                <h2 className={classes.or}>
                  <span>OR</span>
                </h2>
              </Grid>
              <Grid item xs={2} className={classes.grid} />
              <Grid item md={2} xs={12} className={classes.grid} />
              <Grid item md={8} xs={10} className={classes.grid}>
                <Grid container spacing={8}>
                  <Grid item xs={6} className={classes.grid}>
                    <Typography
                      className={classes.timeTxt}
                      variant="subheading"
                      component="p"
                    >
                      EVERY
                    </Typography>
                    <TextField
                      id="ep-markers-every-min-input"
                      variant="outlined"
                      fullWidth
                      className={classes.timeInput}
                      label="min"
                      type="number"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <Typography
                      className={classes.timeTxt}
                      variant="subheading"
                      component="p"
                    >
                      DURATION
                    </Typography>
                    <TextField
                      id="ep-markers-every-duration-sec-input"
                      variant="outlined"
                      fullWidth
                      className={classes.timeInput}
                      label="sec"
                      type="number"
                      margin="dense"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} className={classes.grid} />
            </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StreamForm);
