import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  workFigure: {
    position: "relative",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
    cursor: "pointer",
    margin: "0",
    width:"100%",
    height:"290px",
    "&:hover figcaption": {
      transform: "translateY(0%)",
      visibility: "visible",
      opacity: 1,
    },
  },
  imgStyle: {
    objectFit: "cover",
    height: "290px",
    width: "100%",
    borderRadius: ".5rem",
  },
  workCaption: {
    position: "absolute",
    top: "0",
    left: "0",
    transform: "translateY(50%)",
    width: "100%",
    height: "100%",
    // background: "#17a2bb",
    background: "#c0ebf38c",
    display: "flex",
    transition: "all .5s",
    opacity: 0,
    visibility: "hidden",
  },
  attachClipContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  attachClip: {
    height: "2.8rem",
    width: "2.8rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#158e2a",
    // color: "#ac89ea",
    // position: "absolute",
  },
  clipText: {
    fontWeight: "600",
  },
}));
function SampleItem({ title, img, description, url, type }) {
  const classes = useStyles();
  return (
    <>
      <figure className={classes.workFigure}>
        <img src={img} alt={title} className={classes.imgStyle} />
        <figcaption className={classes.workCaption}>
          <Grid container>
            <Grid item xs={12} className={classes.attachClipContainer}>
              <div className={classes.attachClip}>
                <a href={url}>
                  <AttachFileIcon
                    style={{ fontSize: "22px" }}
                    color="primary"
                  />
                </a>
              </div>
              <div className={classes.attachClip} title={description}>
                <SearchIcon style={{ fontSize: "22px" }} />
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "15px" }}>
              <Typography
                variant="body1"
                color="textPrimary"
                className={classes.clipText}
              >
                {title}
              </Typography>
              <Typography
                variant="caption"
                color="textPrimary"
                className={classes.clipText}
              >
                {type}
              </Typography>
            </Grid>
          </Grid>
        </figcaption>
      </figure>
    </>
  );
}

export default SampleItem;
