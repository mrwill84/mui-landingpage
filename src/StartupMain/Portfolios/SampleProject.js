import React from "react";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SampleItem from "./SampleItem";
import SectionHeader from "../Common/SectionHeader";
import { CarousalItemOnlyMobile } from "../Common/CarousalItem";

const useStyles = makeStyles((theme) => ({
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
    // border: "1px solid #dee2e6",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
  btnStyle: {
    // background: "#17a2bb",
    color: "#333",
    fontWeight: "600",
    width: "40%",
    outline: "none !important",
    marginBottom: "20px",
    marginTop: "25px",
  },
  purchase: {
    background: "#865543",
    color: "#fff",
    fontWeight: "600",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "15px",
  },
  purchaseBtn: {
    marginRight: "8px",
    fontSize: "10px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "7px",
      width: "116px",
      marginRight: "0px",
    },
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
      id="portfolios"
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
        <CarousalItemOnlyMobile>
          {working.map((item, ind) => (
            <Grid
              item
              key={ind}
              md={3}
              sm={4}
              // xs={6}
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
        </CarousalItemOnlyMobile>

        <Hidden xsDown>
          <RenderProjects working={working} />
        </Hidden>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        className={classes.btnStyle}
        color="primary"
      >
        View All Works
      </Button>


    </Grid>
  );
}

/*
 <Grid className={classes.purchase}>
        <Typography variant="caption">
          ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?
        </Typography>
        <Grid>
          <Button
            variant="contained"
            size="small"
            style={{}}
            className={classes.purchaseBtn}
          >
            PURCHASE NOW
          </Button>
          <Button variant="contained" size="small" style={{ fontSize: "10px" }}>
            CONTACT US NOW
          </Button>
        </Grid>
      </Grid>
*/

const RenderProjects = ({ working }) => {
  const classes = useStyles();
  return working.map((item, ind) => (
    <Grid
      item
      key={ind}
      md={3}
      sm={4}
      // xs={6}
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
  ));
};

export default SampleProject;
