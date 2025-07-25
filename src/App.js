import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "A passionate developer.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Software Engineer"
    },
    shows: false,
    interval: 0
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ interval: this.state.interval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        <p>Time since mounted: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;
