import { background } from '../utils/colors';

const styles = theme => ({
  root: {
    marginTop: '30px',
    '& div': {
      background: background.paper
    }
  },
  page: {
    ...theme.mixins.gutters(),
    width: '98%',
    margin: '1%',
    padding: '10px !important'
  }
});

export default styles;
