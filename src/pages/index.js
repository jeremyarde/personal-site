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
          <title>Jeremy Arde</title>
          <link rel="canonical" href="http://jeremyrd.dev" />{" "}
        </Helmet>
        <NavigationBar />
        <Container
          style={{
            justifyContent: true,
            textAlign: "center",
            margin: "auto",
            marginTop: 50
          }}
        >
          <div
            style={{ maxWidth: 600, margin: "auto", justifyContent: "center" }}
          >
            <h1 style={{ textAlign: "center" }}>Hi, I'm Jeremy.</h1>
            <h3>
              I'm a developer passionate about building smart solutions to
              everyday problems using AI.
            </h3>
            <hr></hr>
            <h4>Current interests include:</h4>
            <li>Deep Learning</li>
            <li>Python</li>
            <li>Rust</li>
            <li>Microservices</li>
            <li>Kubernetes</li>
          </div>
        </Container>
      </div>
    );
  }
}

export default function Index() {
  return <Application />;
}
