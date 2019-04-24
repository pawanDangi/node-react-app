import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    width: '19%',
    justifyContent: 'center'
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
            className={classes.radioLabel}
            value="cueInOut"
            control={<Radio />}
            label="Cue In/Out"
          />
          <FormControlLabel
            className={classes.radioLabel}
            value="slot"
            control={<Radio />}
            label="Slot Based"
          />
          <FormControlLabel
            className={classes.radioLabel}
            value="frequency"
            control={<Radio />}
            label="Frequency Based"
          />
          <FormControlLabel
            className={classes.radioLabel}
            value="preRoll"
            control={<Radio />}
            label="Pre Roll"
          />
          <FormControlLabel
            className={classes.radioLabel}
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
