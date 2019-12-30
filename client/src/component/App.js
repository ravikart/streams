import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/streamcreate";
import StreamDelete from "./streams/streamdelete";
import StreamEdit from "./streams/streamedit";
import StreamList from "./streams/streamlist";
import StreamShow from "./streams/streamshow";
import "semantic-ui-css/semantic.min.css";
import Header from "./header";

class App extends React.Component {
  render = () => {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/show" component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
