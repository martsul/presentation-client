import { Loading } from "../components/loading/loading";
import { Login } from "../components/login/login";
import { useLoading } from "../contexts/loading-context/use-loading";

export const LoginPage = () => {
    const { loading } = useLoading();

    return (
        <>
            {loading && <Loading />}
            <Login />
        </>
    );
};
