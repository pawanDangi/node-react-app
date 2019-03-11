import axios from 'axios';
import { get } from 'lodash';
import config from '../config.json';
import snackbar from '../utils/snackbar';

const configVar = config[process.env.REACT_APP_ENVIRONMENT];

export const fetchStreams = async (
  token,
  page = 1,
  pageSize = 10,
  orderBy = '',
  search = ''
) => {
  try {
    const response = await axios.get(
      `${configVar.API_HOST}${
        configVar.BASE_URL
      }/streams?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&search=${search}`,
      {
        headers: {
          'Content-Type': ' application/json;charset=UTF-8',
          token
        }
      }
    );
    return response.data;
  } catch (error) {
    snackbar({
      variant: 'error',
      message: 'Error while fetching streams data.'
    });
    return new Error(error);
  }
};

export const fetchStream = async (token, id) => {
  try {
    const response = await axios.get(
      `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      {
        headers: {
          'Content-Type': ' application/json;charset=UTF-8',
          token
        }
      }
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const createStream = async (token, id) => {
  try {
    const response = await axios.post(
      `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      {
        headers: {
          'Content-Type': ' application/json;charset=UTF-8',
          token
        }
      }
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const updateStream = async (token, id) => {
  try {
    const response = await axios.patch(
      `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      {
        headers: {
          'Content-Type': ' application/json;charset=UTF-8',
          token
        }
      }
    );
    return get(response, 'data.data.response');
  } catch (error) {
    return new Error(error);
  }
};

export const deleteStream = async (token, id) => {
  try {
    const response = await axios.delete(
      `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      {
        headers: {
          'Content-Type': ' application/json;charset=UTF-8',
          token
        }
      }
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};
