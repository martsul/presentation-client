import { PaletteContainer } from "../palette-container/palette-container";
import { ToolbarButtons } from "../toolbar-buttons/toolbar-buttons";
import styles from "./toolbar.module.css";

export const Toolbar = () => {
    return (
        <div className={styles.container}>
            <ToolbarButtons />
            <PaletteContainer />
        </div>
    );
};
