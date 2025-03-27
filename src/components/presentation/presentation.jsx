import { ToolbarContextProvider } from "../../contexts/toolbar-context/toolbar-context-provider";
import { Toolbar } from "../toolbar/toolbar";
import { WorkScreen } from "../work-screen/work-screen";
import styles from "./presentation.module.css";

export const Presentation = () => {
    return (
        <div className={styles.container}>
            <ToolbarContextProvider>
                <div className={styles.toolbar}>
                    <Toolbar />
                </div>
                <div className={styles.users}></div>
                <div className={styles.slides}></div>
                <div className={styles.workScreen}>
                    <WorkScreen />
                </div>
            </ToolbarContextProvider>
        </div>
    );
};
