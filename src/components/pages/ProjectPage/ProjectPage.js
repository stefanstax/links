import { linksbar } from "../../../db";
import { useParams } from "react-router-dom";
import IntroBanner from "./components/IntroBanner";

const ProjectPage = () => {
  const { projectName } = useParams();
  const project = linksbar.find((prod) => prod.cleanUrl === projectName);

  return (
    <div>
      <IntroBanner
        backgroundUrl={project.backgroundUrl}
        title={project.title}
        content={project.description}
        linkWebsite={project.linkTo}
      />
    </div>
  );
};

export default ProjectPage;
