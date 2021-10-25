import "./linksbar.css";

import AllLinks from "./filters";

const LinksBar = ({
  showTemp,
  showProjects,
  showGroups,
  showPartners,
  showTitleTemp,
  showTitleProjects,
  showTitleGroups,
  showTitlePartners,
}) => {
  return (
    <div className="links--bar">
      <div className="container mx-auto py-5 max-w-6xl">
        {showTitleTemp ? (
          <h2 className="text-2xl font-bold pl-6 text-white">
            Available for 24h
          </h2>
        ) : null}
        <div className="scroller">
          {showTemp ? <AllLinks categoryList="Temp" /> : null}
        </div>
        {showTitleProjects ? (
          <h2 className="text-2xl font-bold pl-6 text-white">
            Projects I'm Enrolled In
          </h2>
        ) : null}
        <div className="scroller">
          {showProjects ? <AllLinks categoryList="Projects" /> : null}
        </div>
        {showTitleGroups ? (
          <h2 className="text-2xl font-bold pl-6 text-white">
            Groups that can benefit you
          </h2>
        ) : null}
        <div className="scroller">
          {showGroups ? <AllLinks categoryList="Groups" /> : null}
        </div>
        {showTitlePartners ? (
          <h2 className="text-2xl font-bold pl-6 text-white">
            Partners of Confidence
          </h2>
        ) : null}
        <div className="scroller">
          {showPartners ? <AllLinks categoryList="Partners" /> : null}
        </div>
      </div>
      <h5 className="text-center font-bold text-md py-5 text-white">
        From{" "}
        <a
          href="mailto:stax@stefanstax.com"
          target="_blank"
          rel="noreferrer"
          className="animate-pulse"
        >
          Stefan Stax
        </a>{" "}
        for you
      </h5>
    </div>
  );
};

export default LinksBar;
