import boy from "../../img/u05d81ipwqurxb2k-min.png";
import background from "../../img/7d9wsrac31bdf2gi.png";
import styles from "./visual-login.module.css";
import { VisualLoginList } from "./visual-login-list/visual-login-list";

export const VisualLogin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boyContainer}>
                <img
                    className={styles.background}
                    src={background}
                    alt="background"
                />
                <img className={styles.boy} src={boy} alt="boy" />
            </div>
            <VisualLoginList />
        </div>
    );
};
