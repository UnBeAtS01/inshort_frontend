import {
  CardContent,
  Card,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 268,
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  component: {
    marginBottom: 10,
    boxShadow: "0 2px 5px 0 rgb(0 0 /16%)",
  },
  title: {
    color: "#44444",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  description: {
    color: "#44444d",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  container: {
    padding: 8,
    paddingBottom: "4px!important",
  },
  rightcontainer: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0 0 -25px",
    [theme.breakpoints.down("md")]: {
      margin: "5px 0",
    },
  },
  publisher: {
    fontSize: 18,
    marginTop: "auto",
    fontWeight: "bolder",
    marginBottom: 10,
    "& > *": {
      textDecoration: "none",
      color: "#000",
    },
  },
}));
const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container columns={16}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <img className={classes.image} src={article.url} alt="imagess" />{" "}
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            className={classes.rightcontainer}
          >
            <Typography>{article.title}</Typography>
            <Typography>
              <b>Short</b> by {article.author}/
              {new Date(article.timestamp).toDateString()}
            </Typography>
            <Typography className={classes.description}>
              {article.description}
            </Typography>
            <Typography className={classes.publisher}>
              read more at{" "}
              <a href={article.url} rel="noreferrer" target="_blank">
                {article.publisher}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Article;
