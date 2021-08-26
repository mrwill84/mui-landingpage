import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../Common/SectionHeader";
import Member from "./Member";
import { CarousalItemOnlyMobile } from "../Common/CarousalItem";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "420px",
    marginTop: "3rem",
    textAlign: "center",
  },
  sampleWork: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // margin: "0 30px",
    padding:"2rem",
  },
  sampleItem: {
    display: "flex",
    margin: "5px",
    borderRadius: ".25rem",
    border: "1px solid #dee2e6",
    flexDirection: "column",
  },
}));
function TeamMembers({ members }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      id="teams"
    >
      <Grid item style={{ marginBottom: "3rem" }}>
        <SectionHeader
          isWhite={true}
          text="Team"
          colorText="Members"
          description="We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests"
        />
      </Grid>
      <Grid container className={classes.sampleWork}>
        <CarousalItemOnlyMobile>
          {members.map((item, ind) => (
            <Grid
              item
              key={ind}
              sm={6}
              md={6}
              lg={3}
              className={classes.sampleItem}
            >
              <Member
                name={item.name}
                img={item.img}
                position={item.position}
                gmail={item.gmail}
                phone={item.phone}
              />
            </Grid>
          ))}
        </CarousalItemOnlyMobile>
        <Hidden xsDown>
          {members.map((item, ind) => (
            <Grid
              item
              key={ind}
              md={2}
              // sm={4}
              // xs={6}
              className={classes.sampleItem}
            >
              <Member
                name={item.name}
                img={item.img}
                position={item.position}
                gmail={item.gmail}
                phone={item.phone}
              />
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default TeamMembers;
