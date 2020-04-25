import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const OutlinedButton = (props) => {
    const { colors, children } = props;

    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            color: colors.text,
            backgroundColor: colors.bg,
            border: colors.border,
            textTransform : 'none',
            borderRadius: 5,
            padding: '5px 50px'
          },
        },
      }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
        {children}
      </Button>
    </div>
  );
}

export default OutlinedButton;