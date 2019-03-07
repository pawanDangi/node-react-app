import React from 'react';
import moment from 'moment';
import { Grid, Switch } from '@material-ui/core/';
import { FileCopy, ArrowDropUp, ArrowDropDown } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

import { dateFormat, capitalizeFirstLetter } from '../const';
import copyToClipboard from '../utils/copy-to-clipboard';
import alert from '../utils/alert';

const statusChange = stream => {
  alert({
    title: 'Confirm',
    text: 'Do you really want to disable this stream?',
    handleSuccess: () => {
      console.log(stream);
    }
  });
};

const columns = sortBy => {
  const Arrow = sortBy.desc ? <ArrowDropUp /> : <ArrowDropDown />;
  return [
    {
      Header: () => <div>Id {sortBy.id === 'id' ? Arrow : ''}</div>,
      accessor: 'id',
      minWidth: 200,
      style: {
        textAlign: 'center'
      },
      Cell: row => <Link to={`streams/${row.value}`}>{row.value}</Link>
    },
    {
      Header: () => <div>Name {sortBy.id === 'stream_name' ? Arrow : ''}</div>,
      id: 'stream_name',
      minWidth: 200,
      accessor: d => capitalizeFirstLetter(d.stream_name)
    },
    {
      Header: 'Url',
      accessor: 'url',
      sortable: false,
      minWidth: 300,
      Cell: row => (
        <Grid container spacing={0}>
          <Grid item xs={11} className="long-url">
            {row.value}
          </Grid>
          <Grid item xs={1}>
            {row.value ? (
              <FileCopy
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  copyToClipboard(row.value);
                }}
              />
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      )
    },
    {
      Header: 'SSAI Url',
      accessor: 'dai_url',
      sortable: false,
      minWidth: 300,
      Cell: row => (
        <Grid container spacing={0}>
          <Grid item xs={11} className="long-url">
            {row.value}
          </Grid>
          <Grid item xs={1}>
            {row.value ? (
              <FileCopy
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  copyToClipboard(row.value);
                }}
              />
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      )
    },
    {
      Header: 'Type',
      accessor: 'stream_type',
      sortable: false
    },
    {
      Header: 'Format',
      accessor: 'stream_format',
      sortable: false
    },
    {
      Header: 'Tags',
      id: 'tags',
      sortable: false,
      accessor: d => (d.tags || []).join(',')
    },
    {
      Header: () => (
        <div>Floor Price {sortBy.id === 'floor_price' ? Arrow : ''}</div>
      ),
      accessor: 'floor_price',
      style: {
        textAlign: 'center'
      },
      minWidth: 150
    },
    {
      Header: () => <div>Status {sortBy.id === 'status' ? Arrow : ''}</div>,
      id: 'status',
      style: {
        textAlign: 'center'
      },
      accessor: d => (
        <Switch
          key={`${d.id}-${d.stream_name}`}
          style={{ height: '18px' }}
          checked={d.status}
          onChange={() => {
            statusChange(d);
          }}
          value={d.status}
          color="primary"
        />
      )
    },
    {
      Header: () => (
        <div>Created At {sortBy.id === 'created_date' ? Arrow : ''}</div>
      ),
      id: 'created_date',
      accessor: d => moment(d.created_date).format(dateFormat),
      style: {
        textAlign: 'center'
      },
      minWidth: 200
    },
    {
      Header: () => (
        <div>Updated At {sortBy.id === 'last_modified_date' ? Arrow : ''}</div>
      ),
      id: 'last_modified_date',
      accessor: d => moment(d.last_modified_date).format(dateFormat),
      style: {
        textAlign: 'center'
      },
      minWidth: 200
    }
  ];
};

export default columns;
