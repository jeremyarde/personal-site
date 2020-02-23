import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  // button: {
  //   color: "black"
  // },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function CreateCard(repository, classes) {
  const bull = <span className={classes.bullet}>•</span>;
  console.log("Repo:");
  console.log(repository);
  console.log(repository.url);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {repository.nameWithOwner}
        </Typography>
        <Typography variant="h5" component="h2">
          {repository.name}
        </Typography>
        <Typography variant="body2" component="p">
          {repository.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="linkedinTab" href={repository.url}>
          <Button>Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default function Project(props) {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        user(login: "jeremyaRD") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on GitHub_Repository {
                  name
                  description
                  nameWithOwner
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  // var projects = []
  // for (var x in gatsbyRepoData.gatsbyRepoData.github.user.pinnedItems){
  //   var project = new Object();

  // }

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  console.log(gatsbyRepoData.github);
  console.log(gatsbyRepoData.github.user.pinnedItems);
  return (
    <div>
      <NavigationBar />
      <Typography style={{ fontSize: 50 }}>Projects</Typography>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        layout="auto"
      >
        {CreateCard(
          gatsbyRepoData.github.user.pinnedItems.edges[0].node,
          classes
        )}
      </Grid>
    </div>
  );
}
