import { LoginForm } from "../login-form/login-form";
import { VisualLogin } from "../visual-login/visual-login";
import styles from "./login.module.css";

export const Login = () => {
    return (
        <div className={styles.container}>
            <VisualLogin />
            <LoginForm />
        </div>
    );
};
