import { Palette } from "../../svg/palette";
import { SketchPicker } from "react-color";
import styles from "./palette-container.module.css";
import classNames from "classnames";
import { useState } from "react";
import { useToolbar } from "../../contexts/toolbar-context/use-toolbar";

export const PaletteContainer = () => {
    const [active, setActive] = useState(false);
    const { color, setColor } = useToolbar();

    return (
        <div className="position-relative">
            <button
                onClick={() => setActive(!active)}
                className={styles.button}
            >
                <Palette />
            </button>
            <div
                className={classNames(styles.container, {
                    [styles.active]: active,
                })}
            >
                <SketchPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                />
            </div>
        </div>
    );
};
