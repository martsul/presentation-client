import { useState } from "react";
import { UserContext } from ".";

class User {
    constructor(name) {
        this.name = name;
    }
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    const createUser = (name) => {
        const user = new User(name);
        setUser(user);
    };

    const deleteUser = () => {
        setUser();
    };

    return (
        <UserContext.Provider value={{ user, createUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};
