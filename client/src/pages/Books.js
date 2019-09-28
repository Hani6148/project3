import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, ImageArea, FormBtn } from "../components/Form";
import moment from 'moment';
import axios from 'axios';
// import Thumbnail from '../components/Thumbnail';
import Pictures from "../components/pictures";
require('dotenv').config()

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    eventDate: "",
    eventTime: "",
    location: "",
    url: "",
    image: "",
    selectedFile: null,
    loaded: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data, title: "", author: "", synopsis: "",
          eventDate: "", eventTime: "",
          location: "", url: "",
          image: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  handleUpload = () => {
    const data = new FormData()

    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    console.log(data)
    axios
      .post("/upload", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        eventDate: this.state.eventDate,
        eventTime: this.state.eventTime,
        location: this.state.location,
        url: this.state.url,
        image: this.state.image
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  showWidget = () => {
    console.log(
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    )
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "camera"]
      },
      (error, result) => {
        if (result.event === "success") {

          const file = result.info.url;
          console.log(file);
          this.setState({ image: file });
        }
      }
    );
    widget.open();
  };

  render() {
    return (
      <div>
         <SideNavigation />
      <Container fluid>
        <Row>
          {/* <Col size="md-6 sm-12"> */}
          <Col size="md-4">
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )} */}
          </Col>

          {/* <Col size="md-6"> */}
          <Col size="md-4">
            <Jumbotron>
              <h1>Create an event</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Event (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Organizers (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Description (optional)"
              />
              <Input
                value={this.state.eventDate}
                onChange={this.handleInputChange}
                name="eventDate"
                placeholder="Date (required)"
              />
              <Input
                value={this.state.eventTime}
                onChange={this.handleInputChange}
                name="eventTime"
                placeholder="Time (optional)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (optional)"
              />
              <Input
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="URL (optional)"
              />
              {/* ********************************************************** */}
              <Pictures
                profilePhotoURL={this.state.image}
                showWidget={this.showWidget}
              />
              {/* <div className="App">
                <input type="file" name="" id="" onChange={this.handleselectedFile} />
                <button onClick={this.handleUpload}>Upload</button>
                <div> {Math.round(this.state.loaded, 2)} %</div>
              </div> */}
              {/* ********************************************************** */}
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                {/* Submit Book */}
                Create
              </FormBtn>
            </form>
          </Col>

          {/* <Col size="md-6 sm-12"> */}
          {/* <Col size="md-4">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col> */}

          <Col size="md-4">
            <Jumbotron>
              <h1>View events</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      {/* <strong> */}
                      <thumbnail>
                      <img src={book.image} width="465px" height="200px"></img>
                      </thumbnail>
                      <p></p>
                      {/* value={this.state.image}
                value = {"IMAGE WILL GO HERE"}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Description (optional)" */}
                      <h5>Event: {book.title}</h5>
                      <h5>Organizers: {book.author}</h5>
                      <h5>Description: {book.synopsis}</h5>
                      <h5>Date: {book.eventDate}</h5>
                      {/* {/* <h5>Time: {book.eventTime}</h5>
                      <h5>Location: {book.location}</h5>
                      <h5>URL: {book.url}</h5> */}
                      {/* <h5>Image: {book.image}</h5>  */}
                      {/* <h5>Created: {book.date}</h5> */}
                      <h5>Created: {moment(book.date, "YYYY-MM-DD").format('LL')}</h5>
                      <p></p>
                      {/* </strong> */}
                      {/* <h1>
  {this.state.book.title} by {this.state.book.author}
  </h1> */}
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
      <div/>
     
    );
  }
}

export default Books;
