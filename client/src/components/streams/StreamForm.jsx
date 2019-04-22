import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem
} from '@material-ui/core/';
import { Add as AddIcon } from '@material-ui/icons/';
import className from 'class-names';

import TimeSlider from '../TimeSlider';
import { background, text, primary } from '../../utils/colors';

const styles = theme => ({
  root: {
    marginBottom: '10px',
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
    alignItems: 'center',
    '& div': {
      background: 'none'
    }
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
    width: '50%',
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
    margin: '0',
    paddingTop: '0',
    fontSize: '15px',
    '& span': {
      background: primary.contrastText,
      color: `${text.disabled}`,
      padding: '0 10px'
    }
  },
  action: {
    justifyContent: 'flex-end'
  },
  actionButton: {
    margin: '0 10px'
  },
  save: {
    background: primary.main,
    color: primary.contrastText,
    '&:hover': {
      background: primary.dark
    },
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  }
});

class StreamForm extends Component {
  state = {
    name: '',
    url: '',
    domain: '',
    format: '',
    type: '',
    tags: '',
    markup: {
      value: [],
      type: ''
    }
  };

  componentWillMount() {
    const { streamData } = this.props;
    const oldState = this.state;
    this.setState({ ...oldState, ...streamData });
  }

  componentWillReceiveProps(props) {
    const { streamData } = props;
    const oldState = this.state;
    this.setState({ ...oldState, ...streamData });
  }

  onChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  addMarkups = type => e => {
    console.log(e.target.value, type);
  };

  getDurationText = () => {
    const { duration } = this.state;
    if (!duration) {
      return '0:00';
    }
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  render() {
    const { classes, validateStream } = this.props;
    const { name, url, domain, format, type, tags } = this.state;

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
                  value={name}
                  onChange={e => this.onChange('name', e)}
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
                  value={url}
                  onChange={e => this.onChange('url', e)}
                />
              </Grid>
              <Grid
                item
                sm={2}
                xs={12}
                className={className(classes.validate, classes.grid)}
              >
                <Button
                  variant="contained"
                  className={classes.validateBtn}
                  onClick={() => {
                    validateStream(url);
                  }}
                >
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
                  value={domain}
                  onChange={e => this.onChange('domain', e)}
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
                  value={format}
                  onChange={e => this.onChange('format', e)}
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
                  value={type}
                  onChange={e => this.onChange('type', e)}
                >
                  <MenuItem key={'vod'} value={'VOD'}>
                    VOD
                  </MenuItem>
                  <MenuItem key={'live'} value={'LIVE'}>
                    LIVE
                  </MenuItem>
                  <MenuItem key={'event'} value={'EVENT'}>
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
                  value={tags}
                  onChange={e => this.onChange('tags', e)}
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
                  CUE OUT/IN :
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
              <Grid item xs={2} className={classes.grid} />
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
                <Button
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes.addMarker}
                  onClick={this.addMarkups('slot')}
                >
                  <AddIcon />
                </Button>
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
              <Grid item md={2} xs={12} className={classes.grid}>
                <Typography variant="subheading" component="p">
                  AUTO DETECT :
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
              <Grid item xs={12} className={className(classes.grid)}>
                <TimeSlider text={this.getDurationText()} />
              </Grid>
              <Grid
                item
                xs={12}
                className={className(classes.grid, classes.action)}
              >
                <Button variant="contained" className={classes.actionButton}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className={className(classes.actionButton, classes.save)}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StreamForm);
