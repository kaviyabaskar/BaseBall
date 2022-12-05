import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
//import BaseBallUser from "./BaseBallUser";
import axios from "axios";
import { Link } from "react-router-dom";
import BaseBallUser from "./BaseBallUser";

const apiUrl = "https://localhost:7167/api/baseball";

class BaseBallAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBaseballUser: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isBaseballlogins: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isBaseballUser: true });
    this.setState({ isBaseballlogins: false });
  }
  onDetails() {
    this.setState({ isBaseballlogins: true });
    this.setState({ isBaseballUser: false });
  }

  onFormSubmit(data) {
    this.setState({ isBaseballUser: true });
    this.setState({ isBaseballlogins: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isBaseballUser: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertBaseBall", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isBaseballUser: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (id) => {
    this.setState({ isBaseballlogins: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isBaseballUser: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isBaseballUser || this.state.isEditUser) {
      userForm = (
        <div>

        
        <BaseBallUser
          data-testid="BaseBallUser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
        </div>
      );
    }
    return (

      <div className="App">
        <button id="logout"><Link to="/" className="logbtn" >Logout</Link></button>
        <Container>
          <h1 style={{ textAlign: "center" }}>BaseBall Leaguage Management System</h1>
          <hr></hr>
          {!this.state.isBaseballlogins && (
            <Button variant="primary" onClick={() => this.onDetails()}>
              {" "}
              BaseBall Details
            </Button>
          )}
          {!this.state.isBaseballUser && (
            <Button variant="primary" onClick={() => this.onCreate()}>
              BaseBallUser
            </Button>
          )}
          <br></br>
          {!this.state.isBaseballUser && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default BaseBallAction;
