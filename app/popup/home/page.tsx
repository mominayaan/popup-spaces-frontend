'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff', // Set AppBar background to white
    color: '#000', // Set text color to black
    minHeight: 56, // Reduce the AppBar height
  },
  tab: {
    minWidth: 80, // Reduce the width of the tabs, making the overall AppBar smaller
  },
  toolbar: {
    minHeight: 56, // Ensure the Toolbar inside AppBar also has reduced height
  },
  userName: {
    marginLeft: theme.spacing(4), // Add space between the navigation options and the username
  },
}));

function HomePage() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    // This function will handle changing the selected tab and can later be used to display different content
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            PopUp Spaces
          </Typography>
          <Tabs value={selectedTab} onChange={handleChange} aria-label="navigation tabs">
            {['Explore', 'Bookings', 'Message'].map((label) => (
              <Tab label={label} key={label} className={classes.tab} />
            ))}
          </Tabs>
          <div className={classes.userName}>
            <Typography variant="subtitle1" style={{ marginRight: 10 }}>
              User Name {/* Placeholder for user name */}
            </Typography>
          </div>
          <Avatar alt="User Name" src="/placeholder-for-profile-pic.jpg" /> {/* Placeholder for user profile picture */}
        </Toolbar>
      </AppBar>
      {/* Placeholder for main content */}
      <Typography variant="h4" style={{ padding: 20 }}>
        Main Content Goes Here
      </Typography>
    </div>
  );
}

export default HomePage;
