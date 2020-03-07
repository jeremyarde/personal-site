import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Toolbar,
  IconButton,
  StylesProvider,
  Grid
} from "@material-ui/core";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailButton from "./EmailButton";
import { Container } from "@material-ui/core";
const email = "jere.arde@gmail.com";
export const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "black",
    margin: "auto"
  },
  appBar: {
    background: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  button: {
    color: "black"
  },
  links: { textDecoration: "none", color: "black" }
};

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    // this.currentPage = "Home";
    // this.changePage = this.changePage.bind(this);
  }
  // changePage() {
  //   // console.log(`Changing to ${pageName}`);
  //   this.currentPage = window.location.pathname;
  // }

  render() {
    return (
      <Container style={styles.appBar}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Link
            to="/"
            partiallyActive={false}
            style={{
              textDecoration: "none",
              color: "black",
              margin: "auto"
            }}
          >
            <h3
              style={{
                // alignSelf: "center",
                margin: "auto"
              }}
            >
              jeremy arde
            </h3>
          </Link>
          <Link to="/projects" style={styles.links}>
            <Button>
              <h4 style={styles.title}>Projects</h4>
            </Button>
          </Link>
          <EmailButton email={email} />
          <a target="linkedinTab" href="https://www.linkedin.com/in/j-arde/">
            <Button style={styles.button}>
              <LinkedInIcon />
            </Button>
          </a>
          <a
            target="githubTab"
            href="https://github.com/jeremyaRD"
            style={styles.links}
          >
            <Button style={styles.button}>
              <GithubIcon />
            </Button>
          </a>
          <a target="twitterTab" href="https://twitter.com/jeremyarde">
            <Button style={styles.button}>
              <TwitterIcon />
            </Button>
          </a>
        </Grid>
      </Container>
    );
  }
}

export default NavigationBar;
