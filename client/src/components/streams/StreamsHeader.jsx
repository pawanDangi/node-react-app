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

import styles from '../../css/streams/streams-header';

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
