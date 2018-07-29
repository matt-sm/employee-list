import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  button: { marginLeft: theme.spacing.unit * -1 }
})

const EmployeeModal = props => {
  const { classes, employee, open, handleClose } = props

  return (
    <div>
      <Modal
        aria-labelledby="employee-modal-title"
        aria-describedby="employee-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Grid container spacing={24} alignItems="flex-end">
            <Grid item xs={6}>
              <img src={employee.avatar} alt={`${employee.firstName} ${employee.lastName}`} />
            </Grid>
            <Grid item xs>
              <Typography variant="title" id="employee-modal-title">
                {`${employee.firstName} ${employee.lastName}`}
              </Typography>
              <Divider />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography component="p" id="employee-modal-description">
                {employee.jobTitle}
              </Typography>
              <Typography component="p" id="employee-modal-description">
                {employee.age}
              </Typography>
              <Typography component="p" id="employee-modal-description">
                {new Date(employee.dateJoined).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="p" id="employee-modal-description">
                {employee.bio}
              </Typography>
            </Grid>
          </Grid>
          <Button onClick={() => handleClose()} size="small" color="primary" className={classes.button}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

EmployeeModal.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default withStyles(styles)(EmployeeModal)
