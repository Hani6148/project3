import React, { Component } from "react";
import "./SideNavigation.css";
import NavButton from "../NavButton"

import src from "./bar.jpeg"
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";

import { Input, TextArea, FormBtn } from "../Form";
import Button from "../Button"


export default class SideNavigation extends Component {
  state = {
    users: [],
    firstname: "",
    lastname: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('form clicked')
    if (this.state.firstname && this.state.lastname) {
      console.log(`conditional first and last is met`)
      let query = {
        firstname: this.state.firstname,
        lastname: this.state.lastname
      };
      console.log(`is the query built?: ${JSON.stringify(query, "paul", 2)}`)
      API.getUsers(query)
        .then(res => {
          console.log(`response from api.getUsers completed`)

          console.log(res.data)
          this.setState({
            users: res.data

          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {

    console.log(this.state)
    return (
      <Container>
        <Row>
          <div class="col-md-6">
            <div class="sidenav">
              <img src={src} />
              <NavButton name="About" />
              <NavButton name="Services" />
              <NavButton name="Events" />
              <NavButton name="Contact" />
            </div>
          </div>
          <div class="col-md-6">
            <form>
              <Input
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChange}
                placeholder="Search First name"
              />
              <Input
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChange}
                placeholder="Search Last name"
              />
              <Button
                onClick={this.handleFormSubmit}
                type="success"
                className="input-lg"
              >
                Search
                      </Button>
            </form>

            <div>
              {!this.state.users ? (
                <h1 className="text-center">No Users to Display</h1>
              ) : (
                  <div>
                    <h1>{this.state.users.firstname}</h1>
                    <h1>{this.state.users.lastname}</h1>
                    <h2>{this.state.users.email}</h2>
                    {/* {this.state.users.map(user => {
                      return (
                        <div>
                          <div class="card">
                            <div class="card-body">
                              <h1>{user.firstname} {user.lastname}</h1> <button class="btn btn-lg">Invate</button>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
                  </div>
                )}
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
