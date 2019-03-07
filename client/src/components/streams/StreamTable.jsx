import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core/';
import ReactTable from 'react-table';
import classname from 'class-names';
import 'react-table/react-table.css';

import '../../css/stream-table.css';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    width: '100%',
    '& div': {
      background: 'none'
    }
  }
});

function StreamTable(props) {
  const {
    loading,
    classes,
    columns,
    data,
    pages,
    onFetchData,
    defaultSorted,
    showPaginationTop,
    showPaginationBottom,
    defaultPageSize,
    pageSizeOptions
  } = props;
  // const length = 600;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Paper className={classname(classes.paper, 'stream-table')}>
          <ReactTable
            manual
            onFetchData={onFetchData}
            minRows={5}
            loading={loading}
            data={data}
            columns={columns}
            pages={pages}
            defaultPageSize={defaultPageSize}
            pageSizeOptions={pageSizeOptions}
            // style={{
            //   height: `${length}px`
            // }}
            defaultSorted={defaultSorted}
            className="-striped -highlight"
            showPaginationTop={showPaginationTop}
            showPaginationBottom={showPaginationBottom}
          />
        </Paper>
      </Grid>
    </div>
  );
}

StreamTable.defaultProps = {
  showPaginationTop: true,
  showPaginationBottom: false,
  defaultPageSize: 50,
  pageSizeOptions: [50, 100, 200, 500],
  loading: false,
  defaultSorted: [
    {
      id: 'id',
      desc: false
    }
  ]
};

StreamTable.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultPageSize: PropTypes.number,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  pages: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  onFetchData: PropTypes.func.isRequired,
  defaultSorted: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      desc: PropTypes.bool.isRequired
    })
  ),
  showPaginationTop: PropTypes.bool,
  showPaginationBottom: PropTypes.bool
};

export default withStyles(styles)(StreamTable);
