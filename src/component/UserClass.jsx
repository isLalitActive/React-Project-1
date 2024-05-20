import React from "react";

class UserClass extends React.Component {
    /*Thats how you pass the data from component*/
  constructor(props) {
    super(props);

    this.state = {
        
    }
  }
  /* Implementing states in class based component*/

  render() {

    const { name, city } = this.props;
    return (
      <>
        <h2>{name}</h2>
        <h3>{city}</h3>
        <h3></h3>
      </>
    );
  }
}

export default UserClass;
