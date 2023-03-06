import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Khalil Ben Romdhane",
      bio: "Don’t give up on your dreams. Keep sleeping.",
      imgSrc:
        "https://www.nautiljon.com/images/perso/00/11/leorio_paladiknight_12711.webp",
      profession: "Serial Killer",
    },
    shows: false,
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = () => {
    this.state.shows
      ? this.setState({ shows: false })
      : this.setState({ shows: true });
  };

  render() {
    return (
      <div>
        {this.state.shows && (
          <div>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <div style={{ width: "40%", margin: "0 auto" }}>
              <h1>{this.state.person.fullName}</h1>
              <h2>{this.state.person.bio}</h2>
              <div>
                <img src={this.state.person.imgSrc} alt="Leorio" width="250" />
              </div>
              <h3>{this.state.person.profession}</h3>
            </div>
          </div>
        )}

        <button onClick={this.handleClick} style={{ padding: "10px 30px" }}>
          {this.state.shows ? "hide" : "show"} profile
        </button>
      </div>
    );
  }
}

export default App;
