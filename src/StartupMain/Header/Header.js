import React from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { headerDescript as header } from "../../data";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "450px",
    fontFamily: `'Raleway', sans-serif`,
  },
  image: {
    backgroundImage: `linear-gradient(rgba(138,138,138,.6),rgba(138,138,138,.9)),url("./img/header-bg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "450px",
    position: "absolute",
  },
  headerTitle: {
    position: "relative",
    top: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#efefef",
    gap: "10px",
  },
  headerTitle1: {
    color: "#c6caf3",
    fontWeight: "500",
    fontSize: "13px",
  },

  headerTitle3: {
    padding: "1.8rem",
    background: "#505557",
    color: "#f8f9fa",
    borderRadius: "5px",
    width: "45%",
    textAlign: "center",
    margin: "1rem 0",
    textTransform: "capitalize",
    fontFamily: "Raleway",
    fontWeight: "500",
    "&:hover": {
      borderRadius: "25px",
      transition: "1s ease-in-out",
    },
  },
  headerTitleImg: {
    display: "flex",
    alignItems: "center",
    flexBasis: "100%",
    width: "28%",
  },
  headerTitle4: {
    // color: "#adff2f",
    fontWeight: "300",
    fontSize: "18px",
    // width: "45%",
    textAlign: "center",
  },
  downIcon: {
    cursor: "pointer",
    width: "24px",
    height: "24px",
    marginLeft: "4%",
    "&:hover": {
      width: "30px",
      transition: "1ms ease-in-out",
    },
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="/">
      <span className={classes.image} />
      <Grid container className={classes.headerTitle}>
        <Typography variant="subtitle1" className={classes.headerTitle1}>
          {header.subtitle}
        </Typography>

        <Typography variant="h4" style={{ fontWeight: "700" }}>
          {header.title}
        </Typography>
        <Hidden only="md">
          <Typography
            component="div"
            variant="subtitle1"
            className={classes.headerTitle3}
          >
            {header.shortNote}
          </Typography>
        </Hidden>
        
        <Hidden smDown>
          <Grid item className={classes.headerTitleImg}>
            <Typography
              component="div"
              variant="h6"
              className={classes.headerTitle4}
              color="primary"
            >
              {header.caption}
            </Typography>
            <img
              src="./img/get-started.png"
              alt="get started"
              className={classes.downIcon}
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default Header;
