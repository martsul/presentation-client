import styles from "./visual-login-list-item.module.css";

export const VisualLoginListItem = ({ data }) => {
    const { title, text, img } = data;
    const Img = img;

    return (
        <div className={"d-flex align-items-center gap-3"}>
            <div className={styles.imgContainer}>
                <Img />
            </div>
            <div>
                <h4 className="text-white">{title}</h4>
                <p className="text-secondary">{text}</p>
            </div>
        </div>
    );
};
