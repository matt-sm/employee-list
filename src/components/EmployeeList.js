import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import EmployeeCard from './EmployeeCard'

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 5
  },
  header: {
    display: 'flex',
    'justify-content': 'space-between'
  },
  list: {
    marginTop: theme.spacing.unit * 5
  },
  chip: {
    margin: theme.spacing.unit,
  }
});

const EmployeeList = props => {
  const { classes, employees } = props;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="display1">
          Our Employees
        </Typography>
        <div>
          <Chip label="First name" className={classes.chip}/>
          <Chip label="Last name" className={classes.chip}/>
        </div>
      </div>
      <Divider />
      <Grid container spacing={24} className={classes.list}>
        {employees.map(e => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={e.id}>
            <EmployeeCard employee={e}/>
          </Grid>
        ))}
      </Grid> 
    </div>
  );
}

EmployeeList.propTypes = {
  classes: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired
};

export default withStyles(styles)(EmployeeList);