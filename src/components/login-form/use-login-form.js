import { useState } from "react";
import { useUser } from "../../contexts/user-context/use-user";

const handlerResponse = async (response, createUser, setThereIsError) => {
    if (response.ok) {
        const { user } = await response.json();
        createUser(user);
        setThereIsError(false);
    } else {
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
    });
};

export const useLoginForm = () => {
    const [name, setName] = useState("");
    const [thereIsError, setThereIsError] = useState(false);
    const { createUser } = useUser();

    const handlerChange = (event) => {
        setName(event.target.value);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const response = await postUser(name);
        handlerResponse(response, createUser, setThereIsError);
    };

    return { name, handlerChange, handlerSubmit, thereIsError };
};
