import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemPrice from "./ItemPrice";
import SectionHeader from "../Common/SectionHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "420px",
    marginTop: "3rem",
    textAlign: "center",
  },
  priceList: {
    display: "flex",
    justifyContent: "center",
  },
  sampleItem: {
    display: "flex",
    margin: "15px",
    borderRadius: ".25rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
      flexBasis: "auto",
    },
  },
}));

function Pricings() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      id="pricings"
    >
      <Grid item style={{ marginBottom: "3rem" }}>
        <SectionHeader
          isWhite={true}
          text="Real Cheap"
          colorText="Pricings"
          description="We offer all our services in real low prices in comparison with similar companies"
        />
      </Grid>
      <Grid container className={classes.priceList}>
        <Grid item md={2} sm={6} xs={6} className={classes.sampleItem}>
          <ItemPrice
            title="STANDARD PLAN"
            dollar="19"
            project="5"
            storage="5GB"
            BW="10GB"
          />
        </Grid>
        <Grid item md={2} sm={6} xs={6} className={classes.sampleItem}>
          <ItemPrice
            title="PREMIUM PLAN"
            dollar="29"
            project="10"
            storage="15GB"
            BW="20GB"
          />
        </Grid>
        <Grid item md={2} sm={3} xs={6} className={classes.sampleItem}>
          <ItemPrice
            title="ADVANCED PLAN"
            dollar="49"
            project="15"
            storage="35GB"
            BW="50GB"
          />
        </Grid>
        <Grid item md={2} sm={3} xs={6} className={classes.sampleItem}>
          <ItemPrice
            title="ULTIMATE PLAN"
            dollar="99"
            project="Unlimited"
            storage="Unlimited"
            BW="Unlimited"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Pricings;
