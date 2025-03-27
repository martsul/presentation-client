import { useToolbar } from "../../contexts/toolbar-context/use-toolbar";
import { Pen } from "../../svg/pen";
import { Eraser } from "../../svg/eraser";
import { Letter } from "../../svg/letter";
import { Shapes } from "../../svg/shapes";
import { Circle } from "../../svg/circle";
import { Square } from "../../svg/square";
import { Arrow } from "../../svg/arrow";
import { ShapeStar } from "../../svg/shape-star";
import styles from "./toolbar-buttons.module.css";
import classNames from "classnames";
import { useState } from "react";

const SHAPES_BUTTONS = [
    { img: Circle, onClick: new Function() },
    { img: Square, onClick: new Function() },
    { img: Arrow, onClick: new Function() },
    { img: ShapeStar, onClick: new Function() },
];

export const ToolbarButtons = () => {
    const { onDraw, onErase, addText } = useToolbar();

    return (
        <div className="d-flex gap-2">
            <button onClick={onDraw}>
                <Pen />
            </button>
            <button onClick={onErase}>
                <Eraser />
            </button>
            <button onClick={addText}>
                <Letter />
            </button>
            <MenuButtons buttons={SHAPES_BUTTONS}>
                <Shapes />
            </MenuButtons>
        </div>
    );
};

const MenuButtons = ({ children, buttons }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="position-relative">
            <button onClick={() => setActive(!active)}>{children}</button>
            <div
                className={classNames(styles.menuButtons, {
                    [styles.active]: active,
                })}
            >
                {buttons.map((button, ind) => {
                    const { img, onClick } = button;
                    const Img = img;
                    return (
                        <button key={ind} onClick={onClick}>
                            <Img />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
