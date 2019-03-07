import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'class-names';
import {
  FormControl,
  Stepper,
  Paper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
  Switch
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10px 0px'
  },
  stepper: {
    padding: 0,
    paddingBottom: '10px'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  content: {
    width: '100%',
    padding: '5px',
    '& div': {
      background: '#fff'
    }
  },
  buttons: {
    paddingTop: '15px'
  },
  backButton: {
    marginRight: theme.spacing.unit,
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  button: {
    '&:focus': {
      textDecoration: 'none',
      outline: 'none'
    }
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  textField: {
    margin: 0,
    marginTop: '0px !important',
    width: '95%'
  },
  dense: {
    marginTop: 16
  },
  dai: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'center'
    }
  },
  container: {
    padding: '10px 5px !important'
  },
  grid: {
    padding: '0px !important',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
});

function getSteps() {
  return ['Basic Details', 'Pricing', 'Targeting', 'Capping'];
}

function BasicDetails({ classes }) {
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item lg={4} md={6} xs={12} className={classes.grid}>
        <TextField
          required
          id="name"
          label="Name"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
      </Grid>
      <Grid item lg={4} md={6} xs={12} className={classes.grid}>
        DAI
        <Switch
          checked
          onChange={e => {
            console.log(e.target.checked);
          }}
          value="dai"
          color="primary"
        />
      </Grid>
      <Grid item lg={4} md={6} xs={12} className={classes.grid}>
        <TextField
          required
          id="ad-type"
          label="Ad Type"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

function getStepContent(stepIndex, classes) {
  switch (stepIndex) {
    case 0:
      return <BasicDetails classes={classes} />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    case 3:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepper}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <FormControl className={classes.content}>
                  <Paper className={classes.contentPaper}>
                    {getStepContent(activeStep, classes)}
                  </Paper>
                </FormControl>
                <div className={classes.buttons}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Paper>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
