import React from "react";
import { Grid, Hidden, Typography, ButtonTypeMap, Card, Button, CardMedia, CardActions, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { headerDescript as header } from "../../data";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "450px",
    fontFamily: `'Raleway', sans-serif`,
    [theme.breakpoints.down('sm')]: {
      minHeight: "300px",
    },
  },
  image: {
    backgroundImage: `linear-gradient(rgb(255, 255, 255), transparent),url("./img/header-bg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.3,
    width: "100%",
    height: "450px",

    position: "absolute",
    [theme.breakpoints.down('sm')]: {
      height: "300px",
    },
  },
  headerTitle: {
    color: "#000",
    fontWeight: "500",
    position: "relative",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexDirection: "column",
    color: "#efefef",
    gap: "10px",
  },
  headerTitle1: {
    color: "#c6caf3",
    fontWeight: "500",
    fontSize: "13px",
  },

  rootCard: {
    zIndex: 60,
    top: '10px',
    position: "relative",
  },
  media: {
    width: '100%',
    height: 360,
    zIndex: 60,
  },
  headerTitle3: {
    borderRadius: "5px",
    width: "80%",
    textAlign: "left",
    textTransform: "capitalize",
    fontWeight: "500",
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
  mblBtn: {
    marginTop: "2rem",
    width: 160,
    fontWeight: "600",
  }
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="/">
      <div className={classes.image}></div>
      <Grid position={'relative'} container justifyContent="space-around" direction="row" space={1} alignItems="center" >
        <Grid xs={5} item className={classes.headerTitle}  >
          <Typography variant="h1"  >
            {header.title}
          </Typography>
          <Hidden smDown>
            <Typography
              variant="subtitle1"
              className={classes.headerTitle3}
            >
              {header.shortNote}
            </Typography>
          </Hidden>
          <Button variant="contained"
            color="primary" className={classes.mblBtn}>Get Started</Button>

        </Grid>
        <Hidden smDown>
          <Grid item xs={5} >
            <Card elevation={3} className={classes.rootCard}>
              <CardMedia component="img"
                className={classes.media}
                image="https://source.unsplash.com/collection/190727/1600x900"
                title="Paella dish"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <InfoIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Hidden>
      </Grid>
    </div >
  );
}

export default Header;
