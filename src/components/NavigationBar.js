import React from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
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
    borderRadius: "15px",
    background: "#EFEEEE",
    boxShadow: "30px 30px 60px #cbcaca, -30px -30px 60px #ffffff",
    marginBottom: "40px"
  },
  button: {
    color: "black"
  }
};

class NavigationBar extends React.Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={styles.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              style={styles.menuButton}
              color=""
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={styles.title}>
              <Link
                to="/"
                partiallyActive={false}
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </Link>
            </Typography>
            <Button style={styles.button}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                Projects
              </Link>
            </Button>
            <Button style={styles.button}>CV</Button>
            <Button style={styles.button}>Github</Button>
            <Button style={styles.button}>LinkedIn</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationBar;
