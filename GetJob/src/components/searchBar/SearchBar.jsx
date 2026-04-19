import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({
  placeholder = "Search here...",
  buttonText = "Search",
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className={styles.searchBox}>
      <img
        src="./src/assets/iconSearch.svg"
        alt="Search Icon"
        className={styles.searchIcon}
      />
      <input
        type="text"
        placeholder={placeholder}
        className={`${styles.searchInput}`}
        value={searchText}
        onChange={(query) => setSearchText(query.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
