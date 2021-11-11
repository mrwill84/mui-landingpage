import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Paper,
  Typography,
  Hidden,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { RenderSocial } from "./Member";
const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "3rem",
    background: "#343a40",
  },
  uniqueStyle: {
    background: "#6c757d",
    padding: "3rem",
    display: "flex",
    justifyContent: "space-between",
    color: "#efefef",
    fontFamily: "Poppins",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
  },
  icons: {
    height: "2rem",
    width: "2rem",
    border: "1px solid #6c757d",
    margin: ".2rem",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  location: {
    minHeight: "200px",
    backgroundImage: `url('./img/location.PNG')`,
    padding: "3rem",
  },
  formContainer: {
    padding: "3rem",
    paddingRight: "3.7rem",
    width: "25%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  formControl: {
    display: "block",
    width: "100%",
    padding: "5px",
    fontSize: "1rem",
    color: "#495057",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    margin: "10px 1px",
    outline: "none",
    fontFamily: "Poppins",
  },
  footer: {
    color: "#f8f9fa",
    paddingTop: "3rem",
    paddingBottom: "2rem",
    background: "#343a40",
    display: "flex",
    justifyContent: "center",
  },
}));
//<FeedbackForm />
function Contacts() {
  return (
    <Grid container>
      {/* uniq + purchase */}

      <SocialAddressSection />

      <Footer />
    </Grid>
  );
}
const PurchaseBtn = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.uniqueStyle}>
      <Typography variant="h4">
        UNIQUE! We Do
        <FavoriteIcon style={{ color: "#17a2b8", fontSize: "33px" }} /> It And
        Hope You Too
      </Typography>
      <Button
        variant="contained"
        style={{ background: "#17a2b8", color: "white", padding: "15px" }}
      >
        PURCHASE NOW <AddShoppingCartIcon />
      </Button>
    </Grid>
  );
};

const SocialAddressSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.contact} id="contacts">
      <Grid
        container
        style={{ color: "white", display: "flex", justifyContent: "center" }}
      >
        <img src="./img/icon.png" alt="test" width="30px" height="30px" />
        <p style={{ marginLeft: "9px" }}>Start Up</p>
      </Grid>
      <Grid container className={classes.socials}>
        <Grid className={classes.icons}>
          <RenderSocial imgUrl="./img/facebook.png" />
        </Grid>
        <Grid className={classes.icons}>
          <RenderSocial imgUrl="./img/twitter.png" />
        </Grid>
        <Grid className={classes.icons}>
          <RenderSocial imgUrl="./img/google.png" />
        </Grid>
        <Grid className={classes.icons}>
          <RenderSocial imgUrl="./img/linkedin.png" />
        </Grid>
        <Grid className={classes.icons}>
          <RenderSocial imgUrl="./img/vimeo.png" />
        </Grid>
      </Grid>
    </Grid>
  );
};
const FeedbackForm = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.location}>
      <Paper className={classes.formContainer} style={{}}>
        <form>
          <input
            type="text"
            placeholder="Name..."
            className={classes.formControl}
          />
          <input
            type="email"
            placeholder="Email..."
            className={classes.formControl}
          />
          <textarea
            placeholder="Message"
            rows={6}
            className={classes.formControl}
          ></textarea>
          <Button variant="contained" color="primary">
            Submit Message
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <p>Copyright © 2021 Startup, All Right Reserved</p>
    </Grid>
  );
};

export default Contacts;
