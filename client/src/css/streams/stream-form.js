import { background, text, primary } from '../../utils/colors';

const styles = theme => ({
  root: {
    marginTop: '30px',
    '& div': {
      background: background.paper
    }
  },
  page: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: '0 5%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      margin: '0 5%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 10%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: '0 15%'
    },
    padding: '15px !important'
  },
  heading: {
    borderBottom: `2px solid ${text.disabled}`,
    paddingBottom: 20,
    fontSize: '18px'
  },
  title: {
    padding: '10px 0px !important',
    color: primary.light,
    fontWeight: 600,
    fontSize: '18px'
  },
  form: {
    padding: '20px 0 0'
  },
  grid: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    margin: 0
  },
  validate: {
    alignItems: 'center',
    display: 'flex'
  },
  validateBtn: {
    background: primary.main,
    color: primary.contrastText,
    '&:hover': {
      background: primary.dark
    },
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  addMarker: {
    background: primary.main,
    color: primary.contrastText,
    '&:hover': {
      background: primary.dark
    },
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  timeInput: {
    width: '50px',
    marginRight: '5px'
  },
  timeTxt: {
    paddingRight: '5px'
  },
  or: {
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${text.disabled}`,
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    paddingTop: '15px',
    fontSize: '15px',
    '& span': {
      background: primary.contrastText,
      color: `${text.disabled}`,
      padding: '0 10px'
    }
  }
});

export default styles;
