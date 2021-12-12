import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "#ffff",
    background: "#f44336",
    height: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  text: {
    fontWeight: 300,
    fontSize: 14,
    marginLeft: 50,
  },
  logo: {
    height: 34,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
}));
const InfoHeader = () => {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";
  return (
    <Box className={classes.link}>
      <Typography className={classes.text}>
        For the best experience use of <b>inshorts</b> app on your smartphone
      </Typography>
      <Box style={{ marginLeft: "auto" }}>
        <img src={appleStore} alt="logo" className={classes.logo} />
        <img src={googleStore} alt="logo" className={classes.logo} />
      </Box>
    </Box>
  );
};
export default InfoHeader;
