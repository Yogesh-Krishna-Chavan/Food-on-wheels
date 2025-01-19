//Class component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Data",
        location: "Default Location",
        avatar_url: "http://Dummy-Photo.com",
        bio: "Dummy Bio",
      },
    };
  }

  async componentDidMount() {
    //Api call
    const data = await fetch(
      "https://api.github.com/users/Yogesh-Krishna-Chavan"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-Card">
        {/* <h2>Name: Yogiraj</h2> */}
        <img src={avatar_url}></img>
        <h3>"{bio}"</h3>
        <h2>Name: {name}</h2>
        <h3>Location: 🏡{location}</h3>
        <h3>Contact: 📞9405636464/8805636464</h3>
      </div>
    );
  }
}

export default UserClass;
