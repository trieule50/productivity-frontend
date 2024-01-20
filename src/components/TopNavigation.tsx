import React from "react";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

function TopNavigation () {
    return(
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            TaskBuddy
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default TopNavigation