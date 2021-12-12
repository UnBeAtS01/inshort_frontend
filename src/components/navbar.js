import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const useStyle = makeStyles({
  header: {
    background: "#fff",
    height: 76,
  },
  logo: {
    height: 54,
    margin: "auto",
    paddingRight: 10,
  },
  Menu: {
    color: "#000",
  },
});
const Header = () => {
  const classes = useStyle();
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Menu className={classes.Menu} />
        <img src={url} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
