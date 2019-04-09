import moment from 'moment';

const timeSince = date => {
  const seconds = Math.floor((moment(new Date()) - moment(date)) / 1000);

  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return moment(date).format('MMM DD, YYYY');
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return moment(date).format('MMM DD, YYYY');
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return ' days ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

export default timeSince;
