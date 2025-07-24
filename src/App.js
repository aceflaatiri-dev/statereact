import React from "react";

class App extends React.Component {
  state = {
  person: {
    fullName: "John Doe",
    bio: "A passionate developer.",
    imgSrc: "https://via.placeholder.com/150",
    profession: "Software Engineer"
  },
  shows: false
};
  
  
  render() {
    return (
      <div>
        <h1>Hello React Class Component</h1>
      </div>
    );
  }
}

export default App;