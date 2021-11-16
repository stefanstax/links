// * Styling
import styles from "./IntroBanner.module.css";
// * Icons | 3rd party
import { GlobeAltIcon, AtSymbolIcon } from "@heroicons/react/outline";
import Benefits from "./Benefits";
// * Match data - necesseties
import { linksbar } from "../../../../db";
import { useParams } from "react-router-dom";

const IntroBanner = (props) => {
  // Let's find exact page we're on so we can pull some dynamic data
  const { projectName } = useParams();
  const project = linksbar.find((prod) => prod.cleanUrl === projectName);
  // We found what we need, let's use data we found
  return (
    <div
      style={{ backgroundColor: props.backgroundUrl }}
      className={styles.introBanner__container}
    >
      <div className={styles.introBanner__container__layout}>
        <div className={styles.introBanner__container__content}>
          <h1 className="text-7xl">{props.title}</h1>
          <h2 className="text-2xl my-2">{props.content}</h2>
          {/* Benefits component purely depends on the Match data - necesseties | reading info from db.js */}
          <Benefits
            benefitTextOne={project.benefitTextOne}
            benefitTextTwo={project.benefitTextTwo}
            benefitTextThree={project.benefitTextThree}
            benefitTextFour={project.benefitTextFour}
          />
        </div>
        <div className={styles.introBanner__contact}>
          <a href={props.linkWebsite}>
            <GlobeAltIcon width="20px" height="20px" /> Website
          </a>
          <a href={`mailto:${props.contactPerson}`}>
            <AtSymbolIcon width="20px" height="20px" color="#d9d9d9" />{" "}
            Inquiries
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
