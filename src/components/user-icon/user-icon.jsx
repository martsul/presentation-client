import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useUser } from "../../contexts/user-context/use-user";
import { useColor } from "../../hooks/use-color";
import styles from "./user-icon.module.css";

export const UserIcon = () => {
    const color = useColor();
    const { name } = useUser().user;

    return (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={"fullName"}>{name}</Tooltip>}
        >
            <span
                className={`text-uppercase fs-3 text-white ${styles.icon}`}
                style={{
                    backgroundColor: color,
                }}
            >
                {name[0]}
            </span>
        </OverlayTrigger>
    );
};
