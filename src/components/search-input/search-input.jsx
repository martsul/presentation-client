import { useState } from "react";
import { Search } from "../../svg/search";
import styles from "./search-input.module.css";

export const SearchInput = () => {
    const [value, setValue] = useState("");

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                type="text"
                value={value}
                placeholder="Search"
                onChange={(event) => setValue(event.target.value)}
            />
            <div>
                <Search />
            </div>
        </div>
    );
};
