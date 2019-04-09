import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core/';
import {
  Settings as SettingsIcon,
  FilterList as FilterIcon,
  Add as AddIcon
} from '@material-ui/icons';
import className from 'class-names';
import { Link } from 'react-router-dom';

import { primary, text } from '../../utils/colors';

const styles = theme => ({
  root: {},
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  heading: {
    alignItems: 'center',
    display: 'grid',
    [theme.breakpoints.up('lg')]: {
      width: '65%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '51%'
    },
    [theme.breakpoints.down('md')]: {
      width: '36%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  search: {
    [theme.breakpoints.up('lg')]: {
      width: '15%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '20%'
    },
    [theme.breakpoints.down('md')]: {
      width: '24%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '45%',
      justifyContent: 'end'
    },
    [theme.breakpoints.down('xs')]: {
      width: '55%',
      justifyContent: 'end'
    }
  },
  setting: {
    [theme.breakpoints.up('lg')]: {
      width: '5%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '7%'
    },
    [theme.breakpoints.down('md')]: {
      width: '8%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '12%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15%'
    }
  },
  filter: {
    [theme.breakpoints.up('lg')]: {
      width: '5%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '7%'
    },
    [theme.breakpoints.down('md')]: {
      width: '8%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '12%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15%'
    }
  },
  add: {
    [theme.breakpoints.up('lg')]: {
      width: '10%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '15%'
    },
    [theme.breakpoints.down('md')]: {
      width: '24%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '31%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15%'
    }
  },
  subHeading: {
    color: text.secondary
  },
  icon: {
    width: '95%',
    color: text.secondary,
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  searchInput: {
    margin: 0,
    width: '95%'
  },
  addStream: {
    width: '95%',
    background: primary.main,
    '&:hover': {
      textDecoration: 'none',
      background: primary.dark,
      color: primary.contrastText
    },
    color: primary.contrastText
  },
  addText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
});

function StreamsHeader(props) {
  const { classes, onSearch } = props;

  return (
    <Grid container spacing={0}>
      <Grid className={classes.heading} item>
        <Typography variant="h5" component="h3">
          Inventory
        </Typography>
        <Typography component="p" className={classes.subHeading}>
          List of stream inventory (107).
        </Typography>
      </Grid>
      <Grid className={className(classes.grid, classes.search)} item>
        <TextField
          id="outlined-dense"
          label="Search stream..."
          margin="dense"
          variant="outlined"
          className={classes.searchInput}
          onChange={onSearch}
        />
      </Grid>
      <Grid className={className(classes.grid, classes.setting)} item>
        <Button variant="outlined" className={classes.icon}>
          <SettingsIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid className={className(classes.grid, classes.filter)} item>
        <Button variant="outlined" className={classes.icon}>
          <FilterIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid className={className(classes.grid, classes.add)} item>
        <Button
          variant="outlined"
          component={Link}
          to="streams/create"
          className={className(classes.icon, classes.addStream)}
          size="large"
        >
          <AddIcon /> <span className={classes.addText}>Register Stream</span>
        </Button>
      </Grid>
    </Grid>
  );
}

StreamsHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(StreamsHeader);
