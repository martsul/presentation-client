import classNames from "classnames";
import styles from "./custom-button.module.css";

export const CustomButton = ({ text, isSmall, handlerClick }) => {
    return (
        <button
            className={classNames(styles.button, { [styles.small]: isSmall })}
            onClick={handlerClick}
        >
            {text}
        </button>
    );
};
