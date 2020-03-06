import React from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton, StylesProvider } from "@material-ui/core";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailButton from "./EmailButton";

const email = "jere.arde@gmail.com";
export const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  appBar: {
    //   // from https://neumorphism.io/#55b9f3
    //   borderRadius: "15px",
    background: "#EFEEEE",
    //   boxShadow: "30px 30px 60px #cbcaca, -30px -30px 60px #ffffff",
    marginBottom: "40px"
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
  changePage() {
    // console.log(`Changing to ${pageName}`);
    this.currentPage = window.location.pathname;
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={styles.appBar}>
          <Toolbar>
            <header variant="h6" style={styles.title}>
              <Link
                to="/"
                partiallyActive={false}
                style={{ textDecoration: "none", color: "black" }}
              >
                jeremy arde
              </Link>
            </header>
            <Link to="/" style={styles.links}>
              <Button style={styles.button}>Home</Button>
            </Link>
            <Link to="/projects" style={styles.links}>
              <Button style={styles.button}>Projects</Button>
            </Link>
            <Link to="/about" style={styles.links}>
              <Button style={styles.button}>About</Button>
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationBar;
