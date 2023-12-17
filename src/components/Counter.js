import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      person: {
        fullName: "Nesrine Slama",
        bio: "I'm a full-stack JavaScript developer, fluent in both front-end and back-end technologies. Specializing in frameworks like React and Node.js",
        imgUrl:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        profession: "Software Developer",
      },
    };
  }

  componentDidMount() {
    console.log("Component Did Mount.");
    setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update.");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount.");
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <img
              style={{ width: 300 }}
              src={this.state.person.imgUrl}
              alt={"me"}
            />
            <h2 style={{ color: "white", textAlign: "center" }}>
              {this.state.person.fullName}
            </h2>
            <p style={{ color: "white", textAlign: "center" }}>
              {this.state.person.bio}
            </p>
            <p style={{ color: "white", textAlign: "center" }}>
              Profession: {this.state.person.profession}
            </p>
          </div>
        )}
        <p style={{ textAlign: "center", color: "red" }}>
          Time since mount: {this.state.timer} seconds
        </p>
      </div>
    );
  }
}
