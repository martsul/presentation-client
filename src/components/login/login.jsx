import { useEffect } from "react";
import { LoginForm } from "../login-form/login-form";
import { VisualLogin } from "../visual-login/visual-login";
import styles from "./login.module.css";
import { useLogin } from "../../contexts/login-context/use-login";
import pc from "../../img/pc.png";
import cloud from "../../img/cloud.png";

export const Login = () => {
    const { loadingUser } = useLogin();

    useEffect(() => {
        loadingUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.pc} src={pc} alt="pc" />
            <img className={styles.firstCloud} src={cloud} alt="cloud" />
            <img className={styles.secondCloud} src={cloud} alt="cloud" />
            <VisualLogin />
            <LoginForm />
        </div>
    );
};
