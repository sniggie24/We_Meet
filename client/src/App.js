import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "./images/Logo.png";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#EFFFFD",
    position: "static",
    borderRadius: 15,
    margin: "30px 50px 50px 50px",
    width: "1000px",
    padding: "3px 30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "5px 10px 15px #696969",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  heading: {
    color: "#42C2FF",
    fontFamily: "Fredoka",
    fontWeight: "500",
    position: "absolute",
    right: "210px",
    align: "right",
  },

  logo: {
    height: "50px",
    align: "left",
  },

  image: {
    marginLeft: "15px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {

  const classes = useStyles();

  return(
    <div className={classes.wrapper}>

     <AppBar className={classes.navBar}>
      <img src={Logo} className={classes.logo} alt="Logo" />
      <Typography className={classes.heading} variant="h6" align="center">Start a meeting now!</Typography>
     </AppBar>

     <VideoPlayer />

     <Options>
     <Notifications />
     </Options>

    </div>
  )

};

export default App;
