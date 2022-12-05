import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

class BaseBallUser extends React.Component {

  constructor(props) {
    super(props);

    this.initialState = {
      
      email: "",
      Username: "",
      Mobilenumber: "",
      Password: "",
      ConfirmPassword: "",
      
    };

    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Baseball User</h2>;
      actionStatus = <b>Save</b>;
    }

    return (
      <div>
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  data-testid="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="email"
                />
              </Form.Group>
              <Form.Group controlId="Username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="Username"
                  data-testid="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group controlId="Mobilenumber">
                <Form.Label>Mobilenumber</Form.Label>
                <Form.Control
                  type="text"
                  name="Mobilenumber"
                  data-testid="Mobilenumber"
                  value={this.state.mobilenumber}
                  onChange={this.handleChange}
                  placeholder="Mobilenumber"
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Password"
                  name="Password"
                  data-testid="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="ConfirmPassword">
                <Form.Label>ConfirmPassword</Form.Label>
                <Form.Control
                  type="Password"
                  name="ConfirmPassword"
                  data-testid="ConfirmPassword"
                  value={this.state.confirmpassword}
                  onChange={this.handleChange}
                  placeholder="ConfirmPassword"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="id"
                  value={this.state.id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BaseBallUser;
