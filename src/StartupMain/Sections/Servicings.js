import React from "react";
import { Grid } from "@material-ui/core";
import FeatureItem from "./FeatureItem";
import { makeStyles } from "@material-ui/core/styles";
import {CarousalItemDense} from "../Common/CarousalItem";

const useStyles = makeStyles((theme) => ({
  featureItem: {
    padding: "1rem 2.3rem",
    gap: "2.5rem",
    marginLeft:"3rem",
    // paddingLeft: "8rem",
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
     
    },
  },
  container:{
    maxWidth:"16rem",
    margin:"5px 0",
  }
}));

function Servicings({ servicings }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.featureItem}>
      <CarousalItemDense desnse={true}>
        {servicings.map((item) => (
          <Grid item  key={item.title} className={classes.container}>
            <FeatureItem
              title={item.title}
              img={item.imgUrl}
              descript={item.description}
              caption={item.caption}
            />
          </Grid>
        ))}
      </CarousalItemDense>
    </Grid>
  );
}

export default Servicings;
