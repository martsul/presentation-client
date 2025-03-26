import { useUser } from "../contexts/user-context/use-user";
import { ProjectsPage } from "../pages/projects-page";
import { LoginPage } from "../pages/login-page";
import { Loading } from "../components/loading/loading";
import { useLoading } from "../contexts/loading-context/use-loading";

export const MainPage = () => {
    const { loading } = useLoading();
    const { user } = useUser();

    return (
        <>
            {loading && <Loading />}
            {user ? <ProjectsPage /> : <LoginPage />}
        </>
    );
};
