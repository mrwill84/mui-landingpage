import React from "react";
import { Grid } from "@material-ui/core";
import OfferItem from "./OfferItem";
import SectionHeader from "../Common/SectionHeader";
import { makeStyles } from "@material-ui/core/styles";
import { CarousalItem } from "../Common/CarousalItem";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4%",
  },
  offerSection: {
    margin: "35px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      margin: "2rem",
    },
  },
}));

function Offer({ feature }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root} id="services">
      {/*<Grid item style={{ marginTop: "3rem" }}>
        <SectionHeader
          text="What we"
          colorText="Offer"
          isWhite={true}
          description="We offer our customers the best services & solutions, this is our main services list"
        />
  </Grid>*/}

      <Grid container className={classes.offerSection}>
        <CarousalItem>
          {feature.map((item) => (
            <Grid item xs={12} key={item.title} className={classes.container}>
              <OfferItem
                title={item.title}
                img={item.imgUrl}
                descript={item.description}
              />
            </Grid>
          ))}
        </CarousalItem>
      </Grid>
    </Grid>
  );
}

export default Offer;
