import { Grid } from "@material-ui/core";
import SectionHeader from "../Common/SectionHeader";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeatureItem from "./FeatureItem";
import CountUp from "react-countup";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(255, 255, 255)",
    color: "#333",
    padding: "20px",
    marginTop: "28px",
    // backgroundColor: (props) => props.backgroundColor,
  },

  featureItem: {
    gap: "2rem",
    justifyContent: "center",
    marginLeft: "16px",
    //paddingLeft: "-7rem",
    marginTop: "16px",
    marginBottom: "13px",
    //
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
      gap: "0",
    },
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "20%",
      flexBasis: "100%",
    },
  },
}));

export default function AcomplishSection({ sector }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionHeader text="Our " colorText="Accomplishments" />
      <Grid container space={1} className={classes.featureItem}>
        {sector.map((item) => (
          <Grid
            item
            sm={6}
            xs={6}
            key={item.id}
            className={classes.container}
          >
            <CountUp start={0} end={item.countEvents} delay={0} duration={5.75}>
              {({ countUpRef }) => (
                <FeatureItem
                  ref={countUpRef}
                  title={item.text}
                  img={item.imgUrl}
                  count={item.countEvents}
                />
              )}
            </CountUp>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
