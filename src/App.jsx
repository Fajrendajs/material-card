import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Bookmarks from "@material-ui/icons/Bookmarks";
import Navbar from "./Navbar";
import { TextField } from "@material-ui/core";
import MediaCard from "./Card";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  fontFamily: ["Do Hyeon"]
});

class App extends Component {
  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Button variant="outlined" color="secondary">
            <Bookmarks />
            React Material UI
          </Button>
          <br />
          <TextField placeholder="Enter text" label="Enter text" />
          <MediaCard />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
