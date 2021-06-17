import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  withStyles,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Paper,
  Card,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import todos from '../../service/api/apiTodos';
import users from '../../service/api/apiUsers';

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.4)',
      outline: '1px solid slategrey',
    },
  },
  'root': {
    width: '90%',
  },
  'tableHead': {
    backgroundColor: '#000!important',
    color: '#fff!important',
  },
  'tableContainer': {
    backgroundColor: 'lightgrey',
    color: 'white',
    maxHeight: '80vh',
  },
  'tableBody': {
    overflow: 'auto',
  },
});


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cardCompleted: {
    display: 'flex',
    justifyContent: 'center',
    color: 'green',
    background: '#90EE90',
  },
  cardNotCompleted: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    background: '#E9967A',
  },
});

/**
   * Return Row Element
   * @param {props} props
   * @return {Element} React element
   */
function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">
          <Card className={row.completed ?
            classes.cardCompleted :
            classes.cardNotCompleted}>
            {row.completed ? 'COMPLETED' : 'NOT COMPLETED'}
          </Card>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                  User
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell align="right">Username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.key}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {row.email}
                    </TableCell>
                    <TableCell
                      align="right"
                    >
                      {row.username}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Class Home
 */
class Home extends React.Component {
    state = {
      open: false,
      loading: false,
      todos: [],
      users: [],
      rows: [],
      page: 0,
      rowsPerPage: 10,
    };

    /**
   * Function componentDidMount
   */
    async componentDidMount() {
      const {users} = this.state;
      if (this.state.todos.length === 0 || users.length === 0) {
        this.setState({loading: true});

        await this.handleTodos();
        await this.handleUsers();

        this.setState({
          rows: this.createRows(),
          loading: false,
        });
      }
    }

    /**
   * Get todos from api
   */
    async handleTodos() {
      const response = await todos.list();
      this.setState({
        todos: response.data.length > 0 ? response.data : [],
      });
    }

    /**
   * Get users from api
   */
    async handleUsers() {
      const response = await users.list();

      this.setState({
        users: response.data.length > 0 ? response.data : [],
      });
    }

    /**
     * Create rows data
     * @param {number} key
     * @param {string} title
     * @param {string} completed
     * @param {string} name
     * @param {string} username
     * @param {string} email
     * @return {Element} react element
     */
    createData(key, title, completed, name, username, email) {
      return {
        key,
        title,
        completed,
        name,
        username,
        email,
      };
    }

    /**
           * Create rows of table
           * @return {array} rows array
           */
    createRows() {
      const {users, todos} = this.state;

      const rows = [];

      if (users && todos) {
        const mapUsers = [];
        for (let i = 0; i < users.length; i++) {
          mapUsers[users[i].id] = users[i];
        }

        for (let i = 0; i < todos.length; i++) {
          rows.push(
              this.createData(
                  i,
                  todos[i].title,
                  todos[i].completed,
                  mapUsers[todos[i].userId].name,
                  mapUsers[todos[i].userId].username,
                  mapUsers[todos[i].userId].email,
              ),
          );
        }
      }

      return rows;
    };

    /**
     * Change table page
     * @param {event} event
     * @param {number} newPage
     */
    handleChangePage(event, newPage) {
      this.setState({
        page: newPage,
      });
    };

    /**
     * Change table rows per page
     * @param {event} event
     */
    handleChangeRowsPerPage(event) {
      this.setState({
        rowsPerPage: +event.target.value,
        page: 0,
      });
    };

    /**
 * Return Login Element
 * @return {Element}
 */
    render() {
      const {classes} = this.props;

      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={1}
          height="100vh"
        >
          <Paper className={classes.root}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="collapsible table" stickyHeader>
                <TableHead >
                  <TableRow >
                    <TableCell className={classes.tableHead}/>
                    <TableCell align="left" className={classes.tableHead}>
                      Title
                    </TableCell>
                    <TableCell align="right" className={classes.tableHead}>
                      Completed
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {this.state.rows
                      .slice(
                          this.state.page * this.state.rowsPerPage,
                          this.state.page * this.state.rowsPerPage +
                          this.state.rowsPerPage,
                      )
                      .map((row) => (
                        <Row key={row.key} row={row} />
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={this.state.rows.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage.bind(this)}
              onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
            />
          </Paper>
        </Box>
      );
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
