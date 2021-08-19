import React, { forwardRef } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "25px",
    paddingRight: "12px",
    // marginLeft: "2rem",
  },
  image: {
    height: "2.5rem",
    marginRight: "10px",
    display: "flex",
    objectFit: "contain",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "1rem",
    fontWeight: "600",
  },
}));

const FeatureItem = forwardRef(({ title, img, count }, ref) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <img src={img} alt="test" className={classes.image} />

      <Grid>
        <Typography
          variant="body2"
          color="secondary"
          className={classes.title}
          ref={ref}
          style={{ fontSize: "1.8rem" }}
        >
          {count}
        </Typography>
        <Typography variant="body2" color="secondary" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Paper>
  );
});

export default FeatureItem;
