import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "35px 10px 25px 15px",
  },
  card: {
    height: "65vh",
    padding: "15px 20px",
  },
  image: {
    width: "10rem",
    height: "10rem",
    display: "flex",
    margin: "0 auto",
  },
  title: {
    display: "flex",
    fontWeight: 600,
    justifyContent: "center",
    padding: "15px 10px",
    outline: "none !important",
    color: "rgb(26 26 187)",
    fontFamily: "Raleway",
    fontSize: "20px",
  },
  description: {
    padding: "5px 10px",
    fontFamily: "Raleway",
    paddingBottom: "15px",
    color: "rgb(42 47 51)",
  },
  button: {
    color: "rgb(26 26 187)",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0px 10px",
    marginTop: "10px",
    fontFamily: "Poppins",
  },
}));

function OfferItem({ title, img, descript }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Paper elevation={3} className={classes.card}>
        <img src={img} alt="test" className={classes.image} />

        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>

        <Typography variant="body2" className={classes.description}>
          {descript}
        </Typography>

        <Button className={classes.button} variant="outlined" size="small">
          Read More
        </Button>
      </Paper>
    </Grid>
  );
}

export default OfferItem;
