import { useState } from "react";
import { UserContext } from ".";

class User {
    constructor(name) {
        this.userName = name;
    }
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    const createUser = (name) => {
        setUser(new User(name));
    };

    return (
        <UserContext.Provider value={{ user, createUser }}>
            {children}
        </UserContext.Provider>
    );
};
