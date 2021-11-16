import {
  AdjustmentsIcon,
  FingerPrintIcon,
  UsersIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";

import styles from "./Benefits.module.css";

const Benefits = (props) => {
  return (
    <div className={styles.benefits__iconset}>
      <p className={styles.benefits__contentholder}>
        <AdjustmentsIcon width="20px" height="20px" opacity="0.5" />{" "}
        {props.benefitTextOne}
      </p>
      <p className={styles.benefits__contentholder}>
        <FingerPrintIcon width="20px" height="20px" opacity="0.5" />{" "}
        {props.benefitTextTwo}
      </p>
      <p className={styles.benefits__contentholder}>
        <UsersIcon width="20px" height="20px" opacity="0.5" />{" "}
        {props.benefitTextThree}
      </p>
      <p className={styles.benefits__contentholder}>
        <BookOpenIcon width="20px" height="20px" opacity="0.5" />{" "}
        {props.benefitTextFour}
      </p>
    </div>
  );
};

export default Benefits;
