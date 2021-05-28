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
} from '@material-ui/core';

import Copyright from '../../components/copyright';
import RegisterImg from '../../assets/register.png';

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
      <Container component="main" maxWidth="md" className={classes.container}>
        <div className={classes.paper}>
          <Box
            display="flex"
            alignItems="center"
            bgcolor="background.paper"
          >
            <Box order={1} width="95%">
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
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="firstName"
                          name="name"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="lastName"
                          name="name"
                          label="Last Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
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
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="confirm"
                          name="password"
                          label="Confirm"
                          type="password"
                          autoComplete="current-password"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox value="showPass" color="primary" />
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
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
