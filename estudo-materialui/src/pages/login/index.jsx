import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  FormControl,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  IconButton,
  Slide,
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {Lock} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';

import Copyright from '../../components/copyright';


const styles = (theme) => ({
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
    margin: '0 auto',
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
 * Class Login
 */
class Login extends React.Component {
  state = {
    error: false,
    errorEmail: false,
    errorPassword: false,
    errorLogin: false,
    email: undefined,
    password: undefined,
  };

  /**
   * Check entries and validate the login
   */
  handleSubmit() {
    const {email, password} = this.state;

    if (!email || !password) {
      this.setState({error: true});
    }
  }

  /**
   * Close notify error
   * @param {event} event button
   * @param {reason} reason button
   */
  handleClose(event, reason) {
    if (reason !== 'clickaway') {
      this.setState({error: false});
    }
  }

  /**
   * Return Slide Transition
   * @param {props} props component
   * @return {Element} Slide Transition
   */
  slideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  /**
 * Return Login Element
 * @return {Element}
 */
  render() {
    const {classes} = this.props;

    return (
      <>
        {this.state.error && (
          <Snackbar
            id="id-error-snackbar"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={this.state.error}
            TransitionComponent={this.slideTransition}
            autoHideDuration={5000}
            onClose={this.handleClose.bind(this)}
            message="Note archived"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose.bind(this)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          >
            <Alert
              onClose={this.handleClose.bind(this)} severity="error">
          All fields are mandatory!
            </Alert>
          </Snackbar>
        )
        }
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} style={{marginTop: 20}}>
              <Lock />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              style={{marginTop: 6}}
            >
          Sign in
            </Typography>
            <FormControl className={classes.form}>
              <TextField
                error={this.state.errorEmail}
                helperText={this.state.errorEmail ?
                'Invalid e-mail' :
                'Your Email'}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                onChange={(event)=>{
                  this.setState({email: event.target.value});
                }}
              />
              <TextField
                error={this.state.errorPassword}
                helperText={this.state.errorPassword ?
                'The password is mandatory' :
                'Your Password'}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event)=>{
                  this.setState({password: event.target.value});
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit.bind(this)}
              >
            Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {'Don\'t have an account? Sign Up'}
                  </Link>
                </Grid>
              </Grid>
            </FormControl>
            <Box mt={8}>
              <Copyright />
            </Box>
          </div>
        </Container>
      </>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
