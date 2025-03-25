import { Button, Form } from "react-bootstrap";
import styles from "./login-form.module.css";
import { useLoginForm } from "./use-login-form";
import { LoginFormError } from "./login-form-error/login-from-error";

export const LoginForm = () => {
    const { name, handlerChange, handlerSubmit, thereIsError } = useLoginForm();

    return (
        <Form
            onSubmit={handlerSubmit}
            className={`d-flex flex-column align-items-center justify-content-center ${styles.form}`}
        >
            <h1 className="mb-3">Create amazing content</h1>
            <p className="fs-4">Please come up with a login name.</p>
            {thereIsError && <LoginFormError />}
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    value={name}
                    type="text"
                    onChange={handlerChange}
                    placeholder="Enter email"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
