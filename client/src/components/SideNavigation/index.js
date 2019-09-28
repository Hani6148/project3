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
    searchTerm: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm) {
      API.getUsers(this.state.searchTerm)
        .then(res => {

          console.log(res.data)
          this.setState({
            users: res.data

          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
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
                name="searchTerm"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                placeholder="Search For a user"
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
              {!this.state.users.length ? (
                <h1 className="text-center">No Users to Display</h1>
              ) : (
                  <div>
                    {this.state.users.map(user => {
                      return (
                        <div>
                          <div class="card">
                            <div class="card-body">
                            <h1>{user.firstname} {user.lastname}</h1> <button class="btn btn-lg">Invate</button>
                             </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
