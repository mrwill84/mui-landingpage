import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textFont: {
    fontFamily: "Poppins",
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  colorText: {
    // color: "rgb(68, 190, 199)",
    color: props => props.isWhite ? "rgb(68, 190, 199)" : "#158e2a",
    marginLeft:"8px",
  },
}));
export default function SectionHeader({ text, colorText, description, ...props }) {
  const classes = useStyles(props);
  return (
    <Grid item xs={12} >
      <Typography
        variant="h4"
        className={`${classes.textFont} ${classes.textCenter}`}
      >
        {text}
        <span className={classes.colorText}>{colorText}</span>
      </Typography>
      <Typography
        variant="body1"
        className={`${classes.textFont} ${classes.textCenter}`}
      >
        {description}
      </Typography>
    </Grid>
  );
}
