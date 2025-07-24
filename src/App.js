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
  
  
  render() {
    return (
<button onClick={() => this.setState({ shows: !this.state.shows })}>
  {this.state.shows ? "Hide Profile" : "Show Profile"}
</button>
    );
  }
}

export default App;