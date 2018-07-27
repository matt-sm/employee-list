import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import EmployeeCard from './EmployeeCard'

const styles = theme => ({
  heading: {
    padding: theme.spacing.unit * 5
  },
  list: {
    marginTop: theme.spacing.unit * 5
  }
});

const EmployeeList = props => {
  const { classes, employees } = props;
  return (
    <div className={classes.heading}>
      <Typography variant="display1">
        Our Employees
      </Typography>
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