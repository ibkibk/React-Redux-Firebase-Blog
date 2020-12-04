import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
    padding: 20,
    border: "1px solid grey",
    margin: 2,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  font: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

const BlogSummary = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Blog title{" "}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.font}>
          Posted by ibrahim kurhan Posted by ibrahim kurhanPosted by ibrahim
          kurhanPosted by ibrahim kurhanPosted by ibrahim kurhanPosted by Posted
          by ibrahim kurhan Posted by ibrahim kurhanPosted by ibrahim
          kurhanPosted by ibrahim kurhanPosted by ibrahim kurhanPosted by Posted
          by ibrahim kurhan Posted by ibrahim kurhanPosted by ibrahim
          kurhanPosted by ibrahim kurhanPosted by ibrahim kurhanPosted by
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Posted by ibrahim kurhan
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2nd April, 3am
        </Typography>
      </CardContent>
    </Card>
  );
};
export default BlogSummary;
