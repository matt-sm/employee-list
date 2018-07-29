import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Header from '../components/Header'
import EmployeeList from '../components/EmployeeList'
import EmployeeModal from '../components/EmployeeModal'
import { loadCompany, openModal, closeModal } from '../actions'

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 20,
      paddingRight: theme.spacing.unit * 20
    }
  }
})

class Index extends React.Component {
  componentDidMount() {
    this.props.loadCompany()
  }

  render() {
    const { classes, employees, companyInfo, handleOpen, handleClose, modalData, modalOpen } = this.props

    return (
      <div className={classes.root}>
        <header>
          <Header companyInfo={companyInfo} />
        </header>
        <main>
          <EmployeeList employees={employees} handleOpen={handleOpen} />
          <EmployeeModal employee={modalData} open={modalOpen} handleClose={handleClose} />
        </main>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired,
  companyInfo: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
  modalOpen: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  companyInfo: state.companyInfo,
  employees: state.employees,
  modalOpen: state.modalOpen,
  modalData: state.modalData
})

const mapDispatchToProps = dispatch => ({
  loadCompany: () => dispatch(loadCompany()),
  handleOpen: employee => dispatch(openModal(employee)),
  handleClose: () => dispatch(closeModal())
})

export default withRoot(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Index))
)
