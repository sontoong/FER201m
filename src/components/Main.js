import React, { Component } from "react";
import { data } from "../Share/ListOfPlayer";
import PlayersPresentation from "./PlayersPresentation";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: data,
    };
  }
  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}

export default Main;
