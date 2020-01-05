import React from "react";
import { Route, Router } from "react-router-dom";
import StreamCreate from "./streams/streamcreate";
import StreamDelete from "./streams/streamdelete";
import StreamEdit from "./streams/streamedit";
import StreamList from "./streams/streamlist";
import StreamShow from "./streams/streamshow";
import "semantic-ui-css/semantic.min.css";
import Header from "./header";
import history from "../history";

class App extends React.Component {
  render = () => {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header></Header>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/show" component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  };
}

export default App;
