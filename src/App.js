import LinksBar from "./components/linksbar/LinksBar";
import SocialBar from "./components/socialbar/SocialBar";
import { socialbar, linksbarstatus } from "./db";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-211606208-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div className="main--container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stefan Stax | Links</title>
        <meta
          name="description"
          content="
          Welcome to Stefan Stax Links, only place to get all of my links
          straight on the go. Follow and join my projects as I thrive for their
          success. If you wish to collaborate with me please use the presented contact links."
        />
      </Helmet>
      <SocialBar {...socialbar} />
      <LinksBar {...linksbarstatus} />
    </div>
  );
};

export default App;
