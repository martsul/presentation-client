import { Header } from "../header/header";
import { NoCards } from "../no-cards/no-cards";
import { PresentationsCards } from "../presentations-cards/presentations-cards";
import styles from "./presentations.module.css";

const DATA = new Array(500).fill(0);

export const Presentations = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.circle}></div>
            <div className={styles.content}>
                {DATA.length ? <PresentationsCards data={DATA} /> : <NoCards />}
            </div>
        </div>
    );
};
