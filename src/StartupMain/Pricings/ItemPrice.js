import React from "react";
import { Grid, Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    border: "1px solid rgba(0,0,0,.12)",
    padding: "15px 25px",
    borderRadius: "15px",
    fontSize: "12px",
    marginBottom:"11px",
  },
  btnStyle: {
    background: "#17a2b8",
    color: "#fff",
    fontSize: "10px",
    borderRadius: "10px",
    outline: "none !important",

    "&:hover": {
      background: "#17a2b8",
    },
  },
}));
function ItemPrice({ title, dollar, project, storage, BW }) {
  const classes = useStyles();
  return (
    <Grid className={classes.border}>
      <Button
        variant="contained"
        // color="secondary"
        className={classes.btnStyle}
      >
        {title}
      </Button>
      <Grid className={classes.root}>
        $ <h1>&nbsp;{dollar}</h1>
        <sup>
          <small>99</small>
        </sup>
        &nbsp;Monthly
      </Grid>
      <Divider />
      <p>{project} Projects</p>
      <p>{storage} Storages</p>
      <p>Unlimited Users</p>
      <p>{BW} Bandwidth</p>
      <p>Enahance Security</p>
      <Divider style={{ margin: "8px 0" }} />

      <Button variant="contained" className={classes.btnStyle}>
        Sign Up Now
      </Button>
    </Grid>
  );
}

export default ItemPrice;
