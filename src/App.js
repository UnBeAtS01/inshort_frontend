import "./App.css";
import Header from "./components/navbar";
import InfoHeader from "./components/infoHeader";
import { Box, makeStyles } from "@material-ui/core";
import Articles from "./components/Articles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 110,
    width: "50%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
