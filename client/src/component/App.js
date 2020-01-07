import React from "react";
import { Route, Router, Switch } from "react-router-dom";
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
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
}

export default App;
