import { Button, Form } from "react-bootstrap";
import styles from "./login-form.module.css";
import { LoginFormError } from "./login-form-error/login-from-error";
import { useState } from "react";
import { useLogin } from "../../contexts/login-context/use-login";

export const LoginForm = () => {
    const [name, setName] = useState("");

    const {  handlerSubmit, thereIsError  } = useLogin();

    return (
        <Form
            onSubmit={handlerSubmit}
            className={`position-relative d-flex flex-column align-items-center justify-content-center ${styles.form}`}
        >
            <h1 className="mb-3">Create amazing content</h1>
            <p className="fs-4">Please come up with a login name.</p>
            {thereIsError && <LoginFormError />}
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    value={name}
                    type="text"
                    name="name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    placeholder="Enter email"
                />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Submit
            </Button>
        </Form>
    );
};
