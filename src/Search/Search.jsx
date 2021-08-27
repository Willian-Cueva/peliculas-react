import Styles from "./Search.module.css";
import {BiSearchAlt} from "react-icons/bi";

export function Search() {
  return (
    <form className={Styles.searchContainer} action="">
      <div className={Styles.searchBox}>
        <input className={Styles.searchInput} type="text" name="" id="" />
        <button className={Styles.searchButton} type="submit"><BiSearchAlt/></button>
      </div>
    </form>
  );
}
