import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Helmet from "react-helmet";
// import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from "../components/NavigationBar";

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
        <NavigationBar />
        <Container>
          <Typography>I am no front end dev, forgive me :)</Typography>
        </Container>
      </div>
    );
  }
}

export default function Index() {
  return <Application />;
}
