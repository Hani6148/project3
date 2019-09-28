import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import footer from "./components/";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Switch>

        <Switch>
          
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/welcome" component={Welcome}/>
          {/* <Route exact path="/" component={Books} /> */}
{/* 
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;


// // const createError = require('http-errors');
// const express = require('express');
// // const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger= require('morgan');

// const indexRouter = require('./router/index');
// const usersRouter = require('./router/users');

// const app = express();
// //view enginre setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use('/' , indexRouter);
// app.use('./users', usersRouter);

// module.exports=app;