import styles from "./JobPositionCard.module.css";
import { formatText, TextStyle, slideRight } from "../../utils/appUtils";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

import { useState } from "react";

const JobPositionCard = ({
  title,
  company,
  location,
  experienceLevel,
  onApply,
}) => {
  return (
    <div className={`cardLayout ${styles.jobPositionCard}`}>
      <div className={styles.logoContainer}>
        <HiMiniBuildingOffice2 className={styles.companyLogo} />
      </div>

      <span className={`${formatText(TextStyle.Medium)} ${styles.companyName}`}>
        {company}
      </span>
      <span className={` ${formatText(TextStyle.Normal)} ${styles.jobTitle}`}>
        {title}
      </span>

      <div className={styles.jobDetailsContainer}>
        <div
          className={`${formatText(TextStyle.Small)} ${styles.jobDetailItem}`}
        >
          <TbBriefcaseFilled className={styles.briefcaseIcon} />
          <p>{location}</p>
        </div>

        <div className={styles.jobDetailItemSeparator} />

        <div
          className={`${formatText(TextStyle.Small)} ${styles.jobDetailItem}`}
        >
          <FaLocationDot className={styles.briefcaseIcon} />
          <p>{experienceLevel}</p>
        </div>
      </div>

      <button className={`${styles.applyButton}`} onClick={onApply}>
        Apply
      </button>
    </div>
  );
};

export default JobPositionCard;
