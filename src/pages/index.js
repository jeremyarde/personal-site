import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Helmet from "react-helmet"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
// import { ButtonAppBar } from "../components/appbar"

// import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       {/* <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{" "} */}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   )
// }

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Jeremy - Research & Development</title>
          <link rel="canonical" href="http://jeremyrd.dev" />{" "}
        </Helmet>
        <ButtonAppBar />
        <Container>
          <Typography>I am no front end dev, forgive me :)</Typography>
        </Container>
      </div>
    )
  }
}

export default function Index() {
  return <Application></Application>
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">CV</Button>
          <Button color="inherit">Github</Button>
          <Button color="inherit">LinkedIn</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
