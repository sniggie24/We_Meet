import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

import background from "../images/Pattern.png";

const useStyles = makeStyles((theme) => ({
  video: {
    height: "200px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    marginBottom: "5px",
  },

  gridContainer: {
    justifyContent: "center",
  },

  paper: {
    backgroundColor: "#85F4FF",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "50px",
    padding: "15px 15px 5px 15px",
    borderRadius: "30px",
    margin: "10px",
    boxShadow: "5px 10px 15px #696969",
  },

  names: {
    width: "100%",
    fontFamily: "Fredoka",
    fontWeight: "500",
    fontSize: "15px",
    color: "#141E61",
    marginLeft: "5px",
  }
}));

const VideoPlayer = () => {

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return(
    <Grid container className={classes.gridContainer}>

      {stream && (
       <Paper className={classes.paper}>
         <Grid item xs={12} md={6}>
           <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
           <Typography className={classes.names} variant="h5" gutterBottom>{name || "Name"}</Typography>
         </Grid>
       </Paper>
      )}

      {callAccepted && !callEnded && (
       <Paper className={classes.paper}>
         <Grid item xs={12} md={6}>
           <video playsInline ref={userVideo} autoPlay className={classes.video} />
           <Typography className={classes.names} variant="h5" gutterBottom>{call.name || "Name"}</Typography>
         </Grid>
       </Paper>
      )}

    </Grid>
  );

};

export default VideoPlayer;
