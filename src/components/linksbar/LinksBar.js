import "./linksbar.css";

import AllLinks, { filters } from "./filters";

const LinksBar = ({
  showProjects,
  showGroups,
  showTitleProjects,
  showTitleGroups,
}) => {
  return (
    <div className="links--bar">
      <div className="container mx-auto py-5 max-w-6xl">
        {showTitleProjects ? (
          <h2 class="text-2xl font-bold text-center text-white">
            Projects I'm Enrolled In
          </h2>
        ) : null}
        <div className="scroller">
          {showProjects ? <AllLinks categoryList="Projects" /> : null}
        </div>
        {showTitleGroups ? (
          <h2 className="text-2xl font-bold text-center text-white">
            Groups that can benefit you
          </h2>
        ) : null}
        <div className="scroller">
          {showGroups ? <AllLinks categoryList="Groups" /> : null}
        </div>
      </div>
    </div>
  );
};

export default LinksBar;
