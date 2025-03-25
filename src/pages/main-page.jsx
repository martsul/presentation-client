import { useUser } from "../contexts/user-context/use-user";
import { ProjectsPage } from "../pages/projects-page";
import { LoginPage } from "../pages/login-page";

export const MainPage = () => {
    const { user } = useUser();

    return <>{user ? <ProjectsPage /> : <LoginPage />}</>;
};
