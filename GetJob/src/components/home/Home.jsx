import styles from "./home.module.css";
import { GrFormNext } from "react-icons/gr";
import { formatText, TextStyle, slideRight } from "../../utils/appUtils.js";

const Home = () => {
  return (
    <>
      <div className={styles.rootHome}>
        <div className={styles.sectionSearch}>
          <span className={styles.titleNoJob}>No job! No worries…</span>
          <span className={`${styles.titleNoJob} ${styles.titleDreamJob}`}>
            Let’s crack your <b>Dream Job</b>
          </span>

          <div className={styles.searchBox}>
            <img
              src="./src/assets/iconSearch.svg"
              alt="Search Icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search by role, skills, tech..."
              className={`${styles.searchInput}`}
            />
            <button className={styles.searchButton}>Search</button>
          </div>

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
      </div>
    </>
  );
};

export default Home;
