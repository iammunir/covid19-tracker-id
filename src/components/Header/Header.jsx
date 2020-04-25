import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({dataApi}) => {
  const classes = useStyles();
  
  let update = 'Loading';
  
  if(dataApi) {
    const date = new Date(dataApi.Last_Update).toLocaleDateString(['ban', 'id']);
    const time = new Date(dataApi.Last_Update).toLocaleTimeString();
    update = `${date} - ${time}`;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 di Indonesia
          </Typography>
          <Typography variant="subtitle2">
            Update: {update}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
