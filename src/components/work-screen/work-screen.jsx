import { DrawScreen } from "../draw-screen/draw-screen";
import { TextScreen } from "../text-screen/text-screen";
import styles from "./work-screen.module.css";

export const WorkScreen = () => {
    return (
        <div className={styles.container}>
            <DrawScreen />
            <TextScreen/>
        </div>
    );
};
