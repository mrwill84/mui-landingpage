import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      backgroundColor: purple[500],
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: green[500],
    },
  },
}));

export default function MediaQuery() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        {/* todo: screen size color dependant */}
      <Typography>{"down(sm): red"}</Typography>
     
    </div>
  );
}
