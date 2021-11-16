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
        {showTitleProjects ? (
          <h2 className={`font-bold pl-6 text-black mt-6`}>
            Projects I'm Enrolled In
          </h2>
        ) : null}
        <div className="scroller">
          {showProjects ? <AllLinks categoryList="Projects" /> : null}
        </div>
        {showTitleGroups ? (
          <h2 className={`font-bold pl-6 text-black mt-6`}>
            Groups that can benefit you
          </h2>
        ) : null}
        <div className="scroller">
          {showGroups ? <AllLinks categoryList="Groups" /> : null}
        </div>
        {showTitlePartners ? (
          <h2 className={`font-bold pl-6 text-black mt-6`}>
            Partners of Confidence
          </h2>
        ) : null}
        <div className="scroller">
          {showPartners ? <AllLinks categoryList="Partners" /> : null}
        </div>
      </div>
      <h5 className="text-center font-bold text-md py-5 text-black">
        <a
          href="mailto:stefanstaxbusiness@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="animate-pulse"
        >
          Want a website like this? Personalized for free
        </a>{" "}
      </h5>
    </div>
  );
};

export default LinksBar;
