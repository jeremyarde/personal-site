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
import { Container, Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    // fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  repoCards: {
    minWidth: 275,
    borderRadius: "15px",
    background: "#e6e6e6",
    boxShadow: "30px 30px 60px #d9d9d9, -30px -30px 60px #ffffff",
    marginBottom: "40px"
  }
});

function CreateCard(repository, classes) {
  const bull = <span className={classes.bullet}>•</span>;
  // const classes = useStyles();
  return (
    <ListItem key={repository.name}>
      <Card className={classes.repoCards}>
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
    </ListItem>
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

  const classes = useStyles();
  const projects = [];

  gatsbyRepoData.github.user.pinnedItems.edges.forEach(element => {
    projects.push(CreateCard(element.node, classes));
  });

  return (
    <div>
      <NavigationBar />
      <Typography style={{ fontSize: 50, marginBottom: 20 }}>
        Projects
      </Typography>

      <Container
        // container
        direction="column"
        justify="center"
        layout="auto"
        spacing={2}
      >
        {projects}
      </Container>
    </div>
  );
}
