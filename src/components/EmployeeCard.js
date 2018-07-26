import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function EmployeeCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://s3.amazonaws.com/uifaces/faces/twitter/sovesove/128.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            firstName lastName
          </Typography>
          <Typography component="p">
            Quaerat deserunt dolor ut consequatur numquam doloremque similique. Ipsum
            voluptas dolorem dolorem repellendus totam. Est fugiat et. Deleniti ut
            quibusdam voluptatem rerum voluptatum mollitia soluta. Corporis sint omnis
            nam praesentium saepe placeat.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeCard);