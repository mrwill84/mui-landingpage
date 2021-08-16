import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SampleItem from "./SampleItem";
import SectionHeader from "../Common/SectionHeader";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "420px",
    marginTop: "3rem",
    textAlign: "center",
  },
  caption: {
    color: "#6c757d",
    marginLeft: "10px",
  },
  sampleWork: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  sampleItem: {
    display: "flex",
    margin: "5px",
    borderRadius: ".25rem",
    border: "1px solid #dee2e6",
  },
  btnStyle: {
    // background: "#17a2bb",
    color: "#333",
    fontWeight:"600",
    width: "40%",
    outline: "none !important",
    marginBottom: "20px",
    marginTop: "25px",
  },
  purchase: {
    background: "#865543",
    color: "#fff",
    fontWeight:"600",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "15px",
  },
}));
function SampleProject({ working }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      id="Portfolio"
    >
      <Grid item style={{ marginBottom: "3rem" }}>
        <SectionHeader
          isWhite={true}
          text="Sample"
          colorText="Works"
          description="Let’s take a look at some of the best of our works here, we love them and hope you too"
        />
      </Grid>

      <Grid container className={classes.sampleWork}>
        {working.map((item, ind) => (
          <Grid
            item
            key={ind}
            md={3}
            sm={4}
            xs={6}
            className={classes.sampleItem}
          >
            <SampleItem
              title={item.title}
              img={item.img}
              description={item.description}
              type={item.type}
              url={item.url}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        fullWidth
        variant="contained"
        className={classes.btnStyle}
        color="primary"
      >
        View All Works
      </Button>

      <Grid className={classes.purchase}>
        <Typography variant="caption">
          ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?
        </Typography>
        <Grid>
          <Button
            variant="contained"
            size="small"
            style={{ marginRight: "8px", fontSize: "10px" }}
          >
            PURCHASE NOW
          </Button>
          <Button variant="contained" size="small" style={{ fontSize: "10px" }}>
            CONTACT US NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SampleProject;
