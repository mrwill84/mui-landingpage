import React from "react";
import { Grid, Typography, Divider, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";

const useStyles = makeStyles(() => ({
  imgStyle: {
    objectFit: "contain",
    height: "100%",
    borderRadius: ".5rem",
    width: "100%",
  },
  workFigure: {
    position: "relative",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
    cursor: "pointer",
    margin: "0",
    "&:hover figcaption": {
      transform: "translateY(0%)",
      visibility: "visible",
      opacity: 1,
    },
  },
  teamFig: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  workCaption: {
    position: "absolute",
    top: "0",
    left: "0",
    transform: "translateY(50%)",
    width: "100%",
    height: "100%",
    background: "#17a2bb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    transition: "all .5s",
    opacity: 0,
    visibility: "hidden",
  },
  logoStyle: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  memName: {
    display: "inline-block",
    background: "#17a2b8",
    width: "80%",
    margin: "0 auto",
    color: "#fff",
    padding: ".4rem 1rem",
    borderRadius: ".2rem",
    transform: "translateY(-50%)",
    zIndex: "100",
    fontSize: "15px",
    fontFamily:"cursive",
  },
  contact: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "5px",
    padding: "5px",
    color: "grey",
    fontSize: "13px",
  },
  socials: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5px",
  },
}));

function Member({ name, img, position, gmail, phone }) {
  const classes = useStyles();

  return (
    <>
      <figure className={classes.workFigure}>
        <img src={img} alt={name} className={classes.imgStyle} />
        {/* <figcaption className={classes.workCaption}>
                <Grid item xs={12} className={classes.teamFig}>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"-90px"}}>
                        <img src="./img/facebook.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"-46px"}}>
                        <img src="./img/twitter.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"0px"}}>
                        <img src="./img/linkedin.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"46px"}}>
                        <img src="./img/google.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"90px"}}>
                        <img src="./img/basketball.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"90px"}}>
                        <img src="./img/vimeo.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    
                </Grid>
                   
            </figcaption> */}
      </figure>

      <Typography variant="body1" className={classes.memName}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize: "14px", marginBottom: "12px",fontFamily:"cursive", }}
      >
        {position}
      </Typography>

      <Divider />

      <Grid className={classes.contact}>
        <MailOutlineIcon style={{ fontSize: "18px" }} />
        <Typography variant="body1" style={{ fontSize: "13px" }}>
          {gmail}
        </Typography>
      </Grid>
      <Grid className={classes.contact}>
        <PhoneSharpIcon style={{ fontSize: "18px" }} />
        <Typography variant="body1" style={{ fontSize: "13px" }}>
          {phone}
        </Typography>
      </Grid>
      <Divider />
      <Grid container className={classes.socials}>
        <RenderSocial imgUrl="./img/facebook.png" url="https://www.facebook.com/asif.mahmud.92317" text="fb" />
        <RenderSocial imgUrl="./img/linkedin.png" url="#" text="linkedin" />
        <RenderSocial imgUrl="./img/twitter.png" url="#" text="goggle" />
      </Grid>
    </>
  );
}

export const RenderSocial = ({ imgUrl, url, text }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Link href={url}>
        <img src={imgUrl} alt={text} className={classes.logoStyle} />
      </Link>
    </Grid>
  );
};

export default Member;
