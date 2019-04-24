import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import className from 'class-names';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core/';

const styles = theme => ({
  markupType: {
    display: 'flow-root',
    width: '100%'
  },
  radioLabel: {
    justifyContent: 'end',
    margin: 0
  },
  cueInOut: {
    width: '17%'
  },
  epMarkers: {
    width: '19%'
  },
  epMarkersF: {
    width: '29%'
  },
  preRoll: {
    width: '17%'
  },
  autoDetect: {
    width: '18%'
  }
});

class MarkupTypesForm extends Component {
  state = {
    type: ''
  };

  handleMarkupType = e => {
    const { handleMarkupType } = this.props;
    const type = e.target.value;
    this.setState({ type }, () => {
      handleMarkupType(type);
    });
  };

  render() {
    const { type } = this.state;
    const { classes } = this.props;
    return (
      <FormControl component="div" style={{ width: '100%' }}>
        <RadioGroup
          aria-label="Markup Type"
          name="markupType"
          className={classes.markupType}
          value={type}
          onChange={this.handleMarkupType}
        >
          <FormControlLabel
            className={className(classes.radioLabel, classes.cueInOut)}
            value="cueInOut"
            control={<Radio />}
            label="Cue In/Out"
          />
          <FormControlLabel
            className={className(classes.radioLabel, classes.epMarkers)}
            value="slot"
            control={<Radio />}
            label="EP Markers"
          />
          <FormControlLabel
            className={className(classes.radioLabel, classes.epMarkersF)}
            value="frequency"
            control={<Radio />}
            label="EP Markers(Frequency)"
          />
          <FormControlLabel
            className={className(classes.radioLabel, classes.preRoll)}
            value="preRoll"
            control={<Radio />}
            label="Pre Roll"
          />
          <FormControlLabel
            className={className(classes.radioLabel, classes.autoDetect)}
            value="autoDetect"
            control={<Radio />}
            label="Auto Detect"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

MarkupTypesForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMarkupType: PropTypes.func.isRequired
};

export default withStyles(styles)(MarkupTypesForm);
