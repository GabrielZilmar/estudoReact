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
  FormControlLabel,
  Checkbox,
  CardMedia,
  IconButton,
  Snackbar,
  Slide,
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import Copyright from '../../components/copyright';
import RegisterImg from '../../assets/register.png';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';

import validate from '../../validator/register';

const styles = (theme)=>({
  paper: {
    background: '#fff',
    borderRadius: 10,
    color: '#000',
    padding: 12,
    boxShadow: '6px 6px rgba(0, 0, 0, 0.2)',
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: 'theme.palette.secondary.main',
  },
  form: {
    marginTop: theme.spacing(1),
    padding: 12,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    margin: 0,
  },
});

/**
 * Class Register, render Register Element
 */
class Register extends React.Component {
  state = {
    error: false,
    success: false,
    errorMessage: undefined,
    showPassword: false,
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      passwordConfirm: false,
      matchPassword: false,
    },
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    passwordConfirm: undefined,
  }

  /**
   * Check entries and validate the login
   */
  async handleSubmit() {
    const {firstName, lastName, email, password, passwordConfirm} = this.state;

    const errors = await validate.registrationValidate({
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    });

    if (errors.Errors) {
      for (let i = 0; i < errors.Errors.length; i +=1 ) {
        if (errors.Errors[i].includes('first name')) {
          this.setState({
            error: true,
            success: false,
            errors: {
              ...this.state.errors,
              firstName: true,
            },
            errorMessage: 'All fields are mandatory!',
          });
        } else if (errors.Errors[i].includes('last name')) {
          this.setState({
            error: true,
            success: false,
            errors: {
              ...this.state.errors,
              lastName: true,
            },
            errorMessage: 'All fields are mandatory!',
          });
        } else if (errors.Errors[i].includes('e-mail')) {
          this.setState({
            error: true,
            success: false,
            errors: {
              ...this.state.errors,
              email: true,
            },
            errorMessage: 'All fields are mandatory!',
          });
        } else if (errors.Errors[i].includes('password')) {
          if (errors.Errors[i].includes('confirm')) {
            this.setState({
              error: true,
              success: false,
              errors: {
                ...this.state.errors,
                passwordConfirm: true,
                errorMessage: 'All fields are mandatory!',
              },
              errorMessage: 'All fields are mandatory!',
            });
          } else {
            this.setState({
              error: true,
              success: false,
              errors: {
                ...this.state.errors,
                password: true,
              },
              errorMessage: 'All fields are mandatory!',
            });
          }
        } else if (errors.Errors[i].includes('Match')) {
          this.setState({
            error: true,
            success: false,
            errors: {
              ...this.state.errors,
              matchPassword: true,
            },
            errorMessage: errors.Errors[i],
          });
        }
      }
    } else {
      this.setState({error: false, success: true});
    }
  }

  /**
   * Close notify error
   * @param {event} event button
   * @param {reason} reason button
   */
  handleClose(event, reason) {
    if (reason !== 'clickaway') {
      this.setState({error: false, success: false});
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
   * Render function ,to return register element
   * @return {Element} Register Element
   */
  render() {
    const {classes} = this.props;

    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          minHeight={690}
          minWidth={350}
        >
          <Box >
            <Container
              component="main"
              maxWidth="md"
              className={classes.container}
            >
              <div className={classes.paper}>
                <Box
                  display="flex"
                  alignItems="center"
                  bgcolor="background.paper"
                >
                  <Box order={1}>
                    <Grid container >
                      <Grid item xs={12}>
                        <Avatar
                          className={classes.avatar}
                          style={{marginTop: 20}}
                        >
                          <AccountCircleIcon />
                        </Avatar>
                        <Typography
                          component="h1"
                          variant="h5"
                          align="center"
                          style={{marginTop: 6}}
                        >
                Register
                        </Typography>
                        <FormControl className={classes.form}>
                          <Grid container spacing={2} >
                            <Grid item xs={6}>
                              <TextField
                                error={this.state.errors.firstName}
                                helperText={this.state.errors.firstName ?
                              'The first name is mandatory' :
                              'Your First Name'}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                name="name"
                                label="First Name"
                                autoFocus
                                onChange={(event)=>{
                                  this.setState({
                                    firstName: event.target.value,
                                    errors: {
                                      ...this.state.errors,
                                      firstName: false,
                                    },
                                  });
                                }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                error={this.state.errors.lastName}
                                helperText={this.state.errors.lastName ?
                                'The last name is mandatory' :
                                'Your Last Name'}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                name="name"
                                label="Last Name"
                                onChange={(event)=>{
                                  this.setState({
                                    lastName: event.target.value,
                                    errors: {
                                      ...this.state.errors,
                                      lastName: false,
                                    },
                                  });
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                error={this.state.errors.email}
                                helperText={this.state.errors.email ?
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
                                onChange={(event)=>{
                                  this.setState({
                                    email: event.target.value,
                                    errors: {
                                      ...this.state.errors,
                                      email: false,
                                    },
                                  });
                                }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                error={
                                  this.state.errors.password ||
                                   this.state.errors.matchPassword
                                }
                                helperText={this.state.errors.password ?
                                  'The password is mandatory' :
                                  'Your Password'}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type={
                                  this.state.showPassword ?
                                  'text' :
                                  'password'}
                                onChange={(event)=>{
                                  this.setState({
                                    password: event.target.value,
                                    errors: {
                                      ...this.state.errors,
                                      password: false,
                                      matchPassword: false,
                                    },
                                  });
                                }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField error={
                                this.state.errors.passwordConfirm ||
                                   this.state.errors.matchPassword
                              }
                              helperText={this.state.errors.passwordConfirm ?
                               'The confirm password is mandatory' :
                               'Confirm your Password'}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="confirm"
                              name="password"
                              label="Confirm"
                              type={
                                this.state.showPassword ?
                                'text' :
                                'password'}
                              onChange={(event)=>{
                                this.setState({
                                  passwordConfirm: event.target.value,
                                  errors: {
                                    ...this.state.errors,
                                    passwordConfirm: false,
                                    matchPassword: false,
                                  },
                                });
                              }}
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="showPass"
                                    color="primary"
                                    onChange={(event)=>{
                                      this.setState({
                                        showPassword: event.target.checked,
                                      });
                                    }}
                                  />
                                }
                                label="Show password"
                              />
                            </Grid>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick={this.handleSubmit.bind(this)}
                            >
            Register
                            </Button>
                          </Grid>
                          <Grid container justify="flex-end">
                            <Grid item xs style={{textAlign: 'end'}}>
                              <Link href="/" variant="body2">
                                {'Do have an account? Sign In'}
                              </Link>
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box order={2} >
                    <CardMedia
                      component="img"
                      alt="Register Image"
                      image={RegisterImg}
                      style={
                        {
                          'margin': '0 auto',
                          'width': '80%',
                        }
                      }
                    />
                  </Box>
                </Box>
                <Box mt={8}>
                  <Copyright />
                </Box>
              </div>
            </Container>
          </Box>
        </Box>
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
              {this.state.errorMessage}
            </Alert>
          </Snackbar>
        )
        }
        {this.state.success && (
          <Snackbar
            id="id-error-snackbar"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={this.state.success}
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
              onClose={this.handleClose.bind(this)} severity="success">
              Success! Account created.
            </Alert>
          </Snackbar>
        )
        }
      </>

    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
