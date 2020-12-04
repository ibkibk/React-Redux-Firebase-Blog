import React from "react";
import BlogSummary from "./BlogSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
  },
});
const BlogList = () => {
  const classes = useStyles();

  return (
    <div style={{ paddingTop: "50px" }}>
      <Grid
        container
        direction="column"
        justify="center"
        // alignItems="center"
        className={classes.root}
      >
        {" "}
        <BlogSummary />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        // alignItems="center"
        className={classes.root}
      >
        <BlogSummary />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        // alignItems="center"
        className={classes.root}
      >
        <BlogSummary />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        // alignItems="center"
        className={classes.root}
      >
        <BlogSummary />
      </Grid>
    </div>
  );
};

export default BlogList;
