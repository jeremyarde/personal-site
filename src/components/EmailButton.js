import React from "react";
import Button from "@material-ui/core/Button";
import { styles } from "./NavigationBar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = `mailto:${this.props.email}`;
  }
  render() {
    return (
      <Button style={styles.button} onClick={this.onClick}>
        <MailIcon></MailIcon>
      </Button>
    );
  }
}
