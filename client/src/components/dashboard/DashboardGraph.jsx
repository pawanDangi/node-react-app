import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core/';

import LineChart from '../line-chart/LineChart';

const data = [
  {
    date: 1493922600000,
    value: 320
  },
  {
    date: 1494009000000,
    value: 552
  },
  {
    date: 1494095400000,
    value: 342
  },
  {
    date: 1494181800000,
    value: 431
  },
  {
    date: 1494268200000,
    value: 251
  },
  {
    date: 1494354600220,
    value: 445
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: '100%',
    margin: 0
  },
  grid: {
    '& div': {
      background: '#fff'
    }
  },
  pager: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

function StreamForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} className={classes.container}>
        <Grid item md={6} xs={12} className={classes.grid}>
          <Paper className={classes.pager}>
            <LineChart
              id="line-chart-1"
              title="Chart"
              svgHeight={500}
              data={data}
              isFullScreenView
            />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.grid}>
          <Paper className={classes.pager}>
            <LineChart
              id="line-chart-2"
              title="Chart"
              svgHeight={500}
              data={data}
            />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.grid}>
          <Paper className={classes.pager}>
            <LineChart
              id="line-chart-3"
              title="Chart"
              svgHeight={500}
              data={data}
            />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.grid}>
          <Paper className={classes.pager}>
            <LineChart
              id="line-chart-4"
              title="Chart"
              svgHeight={500}
              data={data}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(StreamForm);
