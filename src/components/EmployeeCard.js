import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

const EmployeeCard = props => {
  const { classes, employee, handleOpen } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={employee.avatar} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {`${employee.firstName} ${employee.lastName}`}
          </Typography>
          <Typography component="p" noWrap="true">
            {employee.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleOpen(employee)} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
}

export default withStyles(styles)(EmployeeCard)
