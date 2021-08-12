import React from "react";
import { Grid } from "@material-ui/core";
import OfferItem from "./OfferItem";
import SectionHeader from "../Common/SectionHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "4%",
  },
  offerSection: {
    margin: "35px",
  },
}));

function Offer({ feature }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root} id="offer">
      <SectionHeader
        text="What we"
        colorText="Offer"
        isWhite={true}
        description="We offer our customers the best services & solutions, this is our main services list"
      />

      <Grid container className={classes.offerSection}>
        {feature.map((item) => (
          <Grid item xs={12} sm={4} key={item.title}>
            <OfferItem
              title={item.title}
              img={item.imgUrl}
              descript={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Offer;
