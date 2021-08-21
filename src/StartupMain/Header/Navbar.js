import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  IconButton,
  // Link,
} from "@material-ui/core";
import { Link } from "react-scroll";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { brandName, navlinks } from "../../data";

const useStyles = makeStyles((theme) => ({
  appBar:{
    background: "#b6f67c",
    color: "#333",
    transition:"ease 1s",
    position: (scrollPosition) =>(scrollPosition > 440 ? "fixed" : "sticky"),
    [theme.breakpoints.down('sm')]: {
      position: (scrollPosition) =>(scrollPosition > 295 ? "fixed" : "sticky"),
    },
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: "40px",
    objectFit: "contain",
    margin: "0 16px",
    marginLeft: theme.spacing(8),
    cursor: "pointer",
  },
  title: {
    fontFamily: "cursive",
    fontWeight: "900",
    display: "none",
    cursor: "pointer",
    marginRight: "1%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontFamily: "cursive",
    fontWeight: "500",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "23ch",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  navlinks: {
    margin: "0 9px",
    fontFamily: "cursive",
    fontWeight: "600",
    cursor: "pointer",

    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      color: "#333",
      // textDecoration:"underline",
      borderBottom:"2px solid #333",
      // transition:"ease 1s",
    },
  },
  navlinksMbl: {
    fontFamily: "cursive",
    fontWeight: "600",
    color: "#333",
    "&:hover": {
      background: "#b6f67c",
    },
  },
  navlinkMbl: {
    color: "#333",
    width: "120px",
    "&:hover": {
      background: "#b6f67c",
      color: "#333",
      textDecoration: "none",
    },
  },
  moreIcon: {
    "&:focus": {
      outline: "none",
    },
  },
  sectionDesktop: {
    color: "rgba(0,0,0,.8)",
    marginRight: "45px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const classes = useStyles(scrollPosition);

  // return once
  // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      style={{ marginTop: scrollPosition > 440 ? "0px" : "60px" }}
    >
      {navlinks.map((linkName) => (
        <MenuItem key={linkName.label} className={classes.navlinksMbl}>
          <RenderNavLinks label={linkName.label} scrollTo={linkName.path} />
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        // position={scrollPosition > 440 ? "fixed" : "sticky"}
        className={classes.appBar}
      >
        <Toolbar>
          <img className={classes.logo} src="./img/icon.png" alt="text" />
          <Typography className={classes.title} variant="h6" noWrap>
            {brandName}
          </Typography>

          <RenderSearch />

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {navlinks.map((linkName) => (
              <RenderNavLinks
                label={linkName.label}
                scrollTo={linkName.path}
                key={linkName.label}
              />
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.moreIcon}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const RenderSearch = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

const RenderNavLinks = ({ label, scrollTo }) => {
  const classes = useStyles();
  return (
    <Link
      key={label}
      className={classes.navlinks}
      to={scrollTo}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      delay={300}
    >
      {label}
    </Link>
  );
};
