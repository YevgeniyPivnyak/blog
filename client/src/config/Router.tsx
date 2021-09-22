import { Switch, Route } from "react-router-dom";
import { About, Home, PostEdit } from "../pages";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/post-edit" component={PostEdit} />
  </Switch>
);

export default Router;
