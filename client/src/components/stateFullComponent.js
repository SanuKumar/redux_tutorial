import React, { Component } from "react";

class StateFullComponent extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      fname: "Sanu" || this.props.defaultName,
      users: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ fname: "Mohan" });
    }, 1000);
    fetch(`https://fakestoreapi.com/users`)
      .then((res) => res.json())
      .then((user) => this.setState({ users: user }));
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // return {
    //   fname: "Kumar",
    // };
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate");
    // console.log(nextProps, nextState);
    // if (this.props.value !== nextProps.value) {
    //   return true;
    // }
    return false;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  //   console.log("prevProps/prevState", prevProps, prevState);
  //   document.getElementById("new").innerHTML =
  //     "Current Name: " + this.state.fname;
  //   return prevState;
  // }

  render() {
    console.log("render");
    const { fname, users } = this.state;
    return (
      <>
        <h1>{fname}</h1>
        {users &&
          users.map((user) => <div key={user.username}>{user.username}</div>)}
      </>
    );
  }
}

export { StateFullComponent };
