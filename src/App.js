import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./components/pages/FrontPage/FrontPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";

const App = () => {
  return (
    <div className="main--container">
      <Helmet>
        <title>Stefan Stax | Links</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="
          Welcome to Stefan Stax Links, only place to get all of my links
          straight on the go. Follow and join my projects as I thrive for their
          success. If you wish to collaborate with me please use the presented contact links."
        />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact component={FrontPage} />
          {/* V2 */}
          {/* <Route path="/:projectName" component={ProjectPage} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
