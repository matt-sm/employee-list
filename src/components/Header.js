import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = props => {
  const {companyInfo} = props
  return (
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <div>
          <Typography variant="title" color="inherit">
            {companyInfo.companyName}
          </Typography>
          <Typography variant="subheading" color="inherit">
            {`${companyInfo.companyMotto} since ${new Date(companyInfo.companyEst).getFullYear()}`}
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  companyInfo: PropTypes.object.isRequired,
};

export default Header;