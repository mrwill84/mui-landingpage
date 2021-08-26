import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { heroImage } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 2.3rem",
    [theme.breakpoints.down('sm')]: {
      padding:"0",
    },
  },
  featureImage: {
    width: "100%",
    height: "100%",
  },
  acquantace: {
    background: "#b6f67c8c",
    padding: "4rem",
  },
  slogan: {
    color: "#306a3a",
    fontFamily: "Poppins",
    fontSize: "1.3rem",
    marginBottom: "12px",
  },
  title: {
    // color: "#158e2a",
    fontFamily: "Poppins",
    fontSize: "2rem",
    marginBottom: "12px",
    fontWeight: "600",
    // fontFamily:""
  },
  description: {
    color: "#2c4231",
    fontSize: "1rem",
  },
  button: {
    marginTop: "24px",
    marginBottom: "-20px",
  },
}));

function HeroSection({ acquantace }) {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} id="features">
      <Grid item className={classes.acquantace} sm={6}>
        <Typography variant="h4" className={classes.slogan}>
          {acquantace.slogan}
        </Typography>
        <Typography variant="h5" className={classes.title} color="secondary">
          {acquantace.title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {acquantace.description}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          className={classes.button}
        >
          Read More
          <ArrowForwardIcon style={{ marginLeft: "5px" }} />
        </Button>
      </Grid>

      <Grid item sm={6} className={classes.imageRoot}>
        <img src={heroImage} alt="test" className={classes.featureImage} />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
