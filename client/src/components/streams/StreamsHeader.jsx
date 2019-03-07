import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Paper, Grid, TextField, Fab, Tooltip } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10px 0px'
  },
  grid: {
    alignItems: 'center'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  createStream: {
    textAlign: 'left'
  },
  button: {
    margin: 0,
    backgroundColor: '#1656a0',
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit',
      backgroundColor: '#1656a0'
    }
  },
  serachArea: {
    textAlign: 'right'
  },
  textField: {
    margin: 0,
    height: '36px',
    '& label': {
      top: '-6px'
    },
    '& div': {
      background: '#fff'
    }
  }
});

function StreamsHeader(props) {
  const { classes, onSearch } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={3}>
          <Paper className={classNames(classes.paper, classes.createStream)}>
            <Tooltip title="Create Stream" aria-label="Create Stream">
              <Fab
                component={Link}
                size="small"
                to="streams/create"
                color="primary"
                aria-label="Add"
                className={classes.button}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classNames(classes.paper, classes.serachArea)}>
            <TextField
              id="outlined-dense"
              label="Search Here"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              onChange={onSearch}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

StreamsHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    createStream: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    serachArea: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(StreamsHeader);
