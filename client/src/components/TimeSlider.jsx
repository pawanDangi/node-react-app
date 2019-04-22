import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/lab';
import { reduce } from 'lodash';

import { primary, secondary } from '../utils/colors';

const styles = {
  root: {
    width: '100%',
    padding: '10px 0px'
  },
  time: {
    display: 'flex',
    '& div': {
      background: 'none'
    }
  },
  text: {
    textAlign: 'right',
    fontSize: '16px'
  },
  slider: {
    padding: '10px 5px'
  },
  thumbWrapper: {
    display: 'none'
  },
  primary: {
    background: `${primary.dark} !important`,
    height: '5px'
  },
  secondary: {
    background: `${secondary.dark} !important`,
    height: '5px'
  }
};

class TimeSlider extends React.Component {
  state = {
    scale: 1
  };

  componentWillMount() {
    const { data } = this.props;
    this.sliderScale(data);
  }

  componentWillReceiveProps(props) {
    const { data } = props;
    this.sliderScale(data);
  }

  sliderScale = data => {
    const total =
      reduce(
        data,
        (sum, n) => {
          return sum + n.value;
        },
        0
      ) || 100;
    this.setState({ scale: 100 / total });
  };

  render() {
    const { classes, data, text } = this.props;
    const { scale } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.time}>
          {data.map((d, i) => {
            return (
              <Slider
                key={i}
                classes={{
                  container: classes.slider,
                  thumbWrapper: classes.thumbWrapper,
                  trackBefore:
                    d.color === 1 ? classes.secondary : classes.primary
                }}
                value={100}
                style={{ width: `${d.value * scale}%` }}
                aria-labelledby="label"
                thumb={<div />}
              />
            );
          })}
        </div>
        <div className={classes.text}>{text}</div>
      </div>
    );
  }
}

TimeSlider.defaultProps = {
  data: [
    {
      value: 100,
      color: 0 // 0 for primary and 1 for secondary
    }
  ]
};

TimeSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  text: PropTypes.string
};

export default withStyles(styles)(TimeSlider);
