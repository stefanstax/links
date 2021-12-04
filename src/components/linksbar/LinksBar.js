import "./linksbar.css";

import AllLinks from "./filters";

const LinksBar = ({
  showProjects,
  showGroups,
  showPartners,
  showAffiliates,
}) => {
  return (
    <div className="links--bar">
      <div className="container mx-auto py-5 max-w-6xl">
        {showAffiliates ? (
          <div className="scroller" id="affiliates">
            <h2 className={`font-bold pl-6 text-black mt-6`}>
              Free deals for you
            </h2>
            <div className="projects__feed">
              <AllLinks categoryList="Affiliates" />
            </div>
          </div>
        ) : null}
        {showProjects ? (
          <div className="scroller">
            <h2 className={`font-bold pl-6 text-black mt-6`}>
              Projects I'm Enrolled In
            </h2>
            <div className="projects__feed">
              <AllLinks categoryList="Projects" />
            </div>
          </div>
        ) : null}
        {showGroups ? (
          <div className="scroller" id="groups">
            <h2 className={`font-bold pl-6 text-black mt-6`}>
              Groups that can benefit you
            </h2>
            <div className="projects__feed">
              <AllLinks categoryList="Groups" />
            </div>
          </div>
        ) : null}
        {showPartners ? (
          <div className="scroller" id="partners">
            <h2 className={`font-bold pl-6 text-black mt-6`}>
              Partners of Confidence
            </h2>
            <div className="projects__feed">
              <AllLinks categoryList="Partners" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LinksBar;
