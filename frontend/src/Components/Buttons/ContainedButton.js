import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ContainedButton = (props) => {
    const { colors, children, linkTo = false, form } = props;

    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
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
      {linkTo
        ? <Button component={Link} to={linkTo} variant="contained">{children}</Button>
        : <Button form={form && form} type="submit" variant="contained">{children}</Button>
      } 
    </div>
  );
}

export default ContainedButton;