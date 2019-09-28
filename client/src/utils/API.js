import axios from "axios";

export default {
  // Gets all books
  getUsers: function(query) {
    console.log("api.getUSERS is hit")
    let {firstname, lastname} = query;
    return axios.get(`/api/users/fn/${firstname}/ln/${lastname}`)
    // return axios.get("/api/users",{ params: query});
  },
  saveFile: function(){
    // $('#fileupload').fileupload();
      alert("this is a test")
    // return axios.get("/api/savedFile/"+)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
