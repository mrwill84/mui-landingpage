import React from "react";
import { Grid } from "@material-ui/core";
import FeatureItem from "./FeatureItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  featureItem: {
    padding: "1rem 2.3rem",
    gap: "2.5rem",
    paddingLeft: "8rem",
  },
}));

function Servicings({ servicings }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.featureItem}>
      {servicings.map((item) => (
        <Grid item sm={3} key={item.title}>
          <FeatureItem
            title={item.title}
            img={item.imgUrl}
            descript={item.description}
            caption={item.caption}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Servicings;
