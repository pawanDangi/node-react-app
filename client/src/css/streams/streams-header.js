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

export default styles;
