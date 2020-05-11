import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const StepButton = (props) => {
  const { step } = props;
  const classes = useStyles();
  switch (step) {
    case 1:
    case 2:
    case 3:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Continue
          </Button>
        </>
      );
    case 4:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Submit
          </Button>
        </>
      );
    
    default:
      return <></>;
  }
};

export default StepButton;