import { useState,useEffect } from "react";
import Styles from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "")
  }, [search]);

  const handleSubmit = function (e) {
    e.preventDefault();
    history.push("/?search="+searchText);
  };
  return (
    <form className={Styles.searchContainer} onSubmit={handleSubmit}>
      <div className={Styles.searchBox}>
        <input
          className={Styles.searchInput}
          type="text"
          name=""
          id=""
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className={Styles.searchButton} type="submit">
          <BiSearchAlt size={20} />
        </button>
      </div>
    </form>
  );
}
