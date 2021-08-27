import {ImSpinner10} from "react-icons/im";
import Styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={Styles.spinner}>
            <ImSpinner10 className={Styles.spinning} size={65}/>
        </div>
    )
}
