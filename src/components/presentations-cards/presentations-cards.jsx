import { CustomButton } from "../custom-button/custom-button";
import styles from "./presentations-cards.module.css";
import { useState } from "react";
import { PresentationsCard } from "../presentations-card/presentations-card";

export const PresentationsCards = ({ data }) => {
    const [countCards, setCountCards] = useState(15);
    const availableData = data.slice(0, countCards);

    return (
        <div className="w-100 d-flex flex-column">
            <CustomButton text={"Add Project"} />
            <div className={`mt-5 ${styles.cardContainer}`}>
                {availableData.map((dataItem, ind) => (
                    <PresentationsCard key={ind} data={ind} />
                ))}
            </div>
            {countCards < data.length && (
                <div className="d-flex justify-content-center mt-4">
                    <CustomButton
                        handlerClick={() => {
                            setCountCards(countCards + 10);
                        }}
                        isSmall={true}
                        text={"More"}
                    />
                </div>
            )}
        </div>
    );
};
