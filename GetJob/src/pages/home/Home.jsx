import styles from "./home.module.css";
import { GrFormNext } from "react-icons/gr";
import { formatText, TextStyle, slideRight } from "../../utils/appUtils";
import { getCompanies, getTopPositions } from "../../rawData/data.js";
import SearchBar from "../../components/searchBar/SearchBar";
import JobPositionCard from "../../components/card/JobPositionCard";
import { useState } from "react";

const Home = () => {
  const companies = getCompanies();
  const topPositions = getTopPositions();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);

    console.log("Search:", value);
  };

  return (
    <>
      <div className={styles.rootHome}>
        <div className={styles.sectionSearch}>
          <span className={styles.titleNoJob}>No job! No worries…</span>
          <span className={`${styles.titleNoJob} ${styles.titleDreamJob}`}>
            Let’s crack your <b>Dream Job</b>
          </span>
          <SearchBar
            placeholder="Search by role, skills, tech..."
            buttonText="Search"
            onSearch={handleSearch}
          />
          <div className={styles.bottomGradient}></div>
        </div>

        <div className={styles.sectionTopPositions}>
          <div className={styles.sectionStrip} />

          <span
            className={`${formatText(TextStyle.Large)} ${styles.titleTopPositions}`}
          >
            Top Positions
          </span>

          <div
            className={`${formatText(TextStyle.Normal, true, true, true)} ${styles.sectionsExploreAll}`}
          >
            <span>Explore All</span>
            <GrFormNext className={styles.nextIconExplore} />
          </div>
        </div>

        {/* <JobPositionCard
          title="Senior Frontend Developer"
          company="Tech Corp"
          location="San Francisco, CA"
          experienceLevel="Senior"
          onApply={() => console.log("Apply for", "Senior Frontend Developer")}
        /> */}

        <div className={styles.topPositionsContainer}>
          {topPositions.map((job) => (
            <JobPositionCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              experienceLevel={job.level}
              onApply={() => console.log("Apply for", position.title)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
