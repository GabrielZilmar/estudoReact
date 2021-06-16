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
  Typography,
  Paper,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import todos from '../../service/api/apiTodos';
import users from '../../service/api/apiUsers';

const styles = (theme) => ({
  tableHead: {
    backgroundColor: '#000!important',
    color: '#fff!important',
  },
  tableRow: {
    backgroundColor: 'lightgrey',
    color: 'white',
  },
});


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
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
    <React.Fragment>
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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                  History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell
                        align="right"
                      >
                        {historyRow.amount}
                      </TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) /
                           100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
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
        history: [
          {date: '2020-01-05', customerId: '11091700', amount: 3},
        ],
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
          <TableContainer component={Paper} className={classes.tableRow}>
            <Table aria-label="collapsible table" >
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
              <TableBody>
                {this.state.rows.map((row) => (
                  <Row key={row.key} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
