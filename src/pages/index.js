import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import withRoot from '../withRoot';
import EmployeeCard from '../components/EmployeeCard'

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20
  },
  heading: {
    paddingTop: theme.spacing.unit * 10,
  },
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="display1" gutterBottom align="left" className={classes.heading}>
        Our Employees
      </Typography>
      <Divider />
      <Grid container spacing={24} style={{padding: 24}}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <EmployeeCard />
        </Grid>
      </Grid>      
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
