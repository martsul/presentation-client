import { Phone } from "../../../svg/phone";
import { Star } from "../../../svg/star";
import { World } from "../../../svg/world";
import { VisualLoginListItem } from "../visual-login-list-item/visual-login-list-item";
import styles from "./visual-login-list.module.css";

const LIST_DATA = [
    {
        title: "Mobile-Friendly",
        text: "Enjoy a seamless experience with an interface compatible with all devices.",
        img: Phone,
    },
    {
        title: "Global Features",
        text: "We’ve carefully selected top-notch features from around the world for your presentations.",
        img: World,
    },
    {
        title: "High Quality",
        text: "We provide the best service by continuously testing and updating our presentation tools on the platform.",
        img: Star,
    },
];

export const VisualLoginList = () => {
    return (
        <div
            className={`flex-column align-items-start gap-3 ${styles.container}`}
        >
            {LIST_DATA.map((e, ind) => (
                <VisualLoginListItem key={ind} data={e} />
            ))}
        </div>
    );
};
