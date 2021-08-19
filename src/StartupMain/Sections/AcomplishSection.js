import { Grid } from "@material-ui/core";
import SectionHeader from "../Common/SectionHeader";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeatureItem from "./FeatureItem";
import CountUp from "react-countup";
const useStyles = makeStyles(() => ({
  root: {
    background: "#b6f67c8c",
    padding: "20px",
    marginTop: "28px",
    // backgroundColor: (props) => props.backgroundColor,
  },

  featureItem: {
    padding: "1rem 2.3rem",
    gap: "2rem",
    paddingLeft: "7rem",
    marginTop: "16px",
    marginBottom: "13px",
  },
}));

export default function AcomplishSection({ sector }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionHeader text="Our " colorText="Accomplishments" />
      <Grid container className={classes.featureItem}>
        {sector.map((item) => (
          <Grid
            item
            sm={2}
            style={{ maxWidth: "20%", flexBasis: "100%" }}
            key={item.id}
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

