import art from "../../img/art.png";
import { CustomButton } from "../custom-button/custom-button";
import styles from "./no-cards.module.css";

export const NoCards = () => {
    return (
        <div className="d-flex align-items-center position-relative gap-3 justify-content-end h-100">
            <div className={styles.imgContainer}>
                <img className="w-100" src={art} alt="art" />
            </div>
            <div className="d-flex flex-column align-items-xl-start align-items-end gap-4 w-100 position-relative">
                <h1 className={styles.title}>Create your first presentation</h1>
                <div>
                    <CustomButton text={"Create"} />
                </div>
            </div>
        </div>
    );
};
