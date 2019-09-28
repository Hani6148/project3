import React from "react";
 import SideNavigation from  './components/SideNavigation';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

  
  return (
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Books} />
    //       <Route exact path="/books" component={Books} />
    //       <Route exact path="/books/:id" component={Detail} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div>
    // </Router>

      <SideNavigation />
  );
}

export default App;
