import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core/';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import '../../css/stream-table.css';

function StreamTable(props) {
  const {
    loading,
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

  return (
    <Paper className="stream-table">
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
        defaultSorted={defaultSorted}
        className="-striped -highlight"
        showPaginationTop={showPaginationTop}
        showPaginationBottom={showPaginationBottom}
      />
    </Paper>
  );
}

StreamTable.defaultProps = {
  showPaginationTop: false,
  showPaginationBottom: true,
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

export default StreamTable;
