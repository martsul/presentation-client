import { useState } from "react";
import { LoginContext } from ".";
import { useUser } from "../user-context/use-user";
import { useLoading } from "../loading-context/use-loading";

const handlerResponse = async (response, createUser, setThereIsError) => {
    if (response.ok) {
        const { name } = await response.json();
        createUser(name);
        setThereIsError(false);
    } else if (response.status !== 404) {
        setThereIsError(true);
    }
};

const postUser = async (name) => {
    return await fetch("http://localhost:5000/api/user", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
};

const getUser = async () => {
    return await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
            "Cache-Control": "no-store",
        },
        credentials: "include",
    });
};

const deleteUserFromServer = async () => {
    return await fetch("http://localhost:5000/api/user", {
        method: "DELETE",
        headers: {
            "Cache-Control": "no-store",
        },
        credentials: "include",
    });
};

export const LoginContextProvider = ({ children }) => {
    const [thereIsError, setThereIsError] = useState(false);
    const { createUser, deleteUser } = useUser();
    const { startLoading, stopLoading } = useLoading();

    const handlerSubmit = async (event) => {
        event.preventDefault();
        startLoading();
        const response = await postUser(new FormData(event.target).get("name"));
        await handlerResponse(response, createUser, setThereIsError);
        stopLoading();
    };

    const loadingUser = async () => {
        startLoading();
        const response = await getUser();
        await handlerResponse(response, createUser, setThereIsError);
        stopLoading();
    };

    const logOut = async () => {
        startLoading();
        await deleteUserFromServer();
        deleteUser();
        stopLoading();
    };

    return (
        <LoginContext.Provider
            value={{ handlerSubmit, loadingUser, thereIsError, logOut }}
        >
            {children}
        </LoginContext.Provider>
    );
};
