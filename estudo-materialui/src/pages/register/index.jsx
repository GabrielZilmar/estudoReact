import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Container,
  Button,
  TextField,
  FormControl,
  Link,
  Grid,
  Box,
  Typography,
  Avatar,
} from '@material-ui/core';

import Copyright from '../../components/copyright';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = (theme)=>({
  paper: {
    background: '#fff',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#000',
    padding: 12,
    boxShadow: '6px 6px rgba(0, 0, 0, 0.2)',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'theme.palette.secondary.main',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    'margin': 0,
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    '-ms-transform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)',
  },
});

/**
 * Class Register, render Register Element
 */
class Register extends React.Component {
  /**
   * Render function ,to return register element
   * @return {Element} Register Element
   */
  render() {
    const {classes} = this.props;

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} style={{marginTop: 20}}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Register
          </Typography>
          <FormControl className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Register
            </Button>
            <Grid container justify="flex-end">
              <Grid item xs style={{textAlign: 'end'}}>
                <Link href="/" variant="body2">
                  {'Do have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
          <Box mt={8}>
            <Copyright />
          </Box>
        </div>
      </Container>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
