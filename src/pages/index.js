import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from '../components/Header'
import EmployeeList from '../components/EmployeeList'
import {loadCompany} from '../actions'

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 20,
      paddingRight: theme.spacing.unit * 20
    }
  }
});

class Index extends React.Component {
  componentDidMount() {
    this.props.loadCompany()
  }

  render() {
    const { classes, employees, companyInfo } = this.props;

    return (
      <div className={classes.root}>
        <header>
          <Header companyInfo={companyInfo}/>
        </header>
        <main>
          <EmployeeList employees={employees}/>
        </main>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
  companyInfo: state.companyInfo,
  employees: state.employees
})

const mapDispatchToProps = dispatch => ({
  loadCompany: () => dispatch(loadCompany())
})

export default withRoot(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles) (Index)));
