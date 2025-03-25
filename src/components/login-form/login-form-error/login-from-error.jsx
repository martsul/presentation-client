import { Alert } from "react-bootstrap";

export const LoginFormError = () => (
    <Alert className="w-100" variant={"danger"}>
        An error has occurred. Please repeat later.
    </Alert>
);
