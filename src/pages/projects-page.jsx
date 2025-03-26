import { Loading } from "../components/loading/loading";
import { useLoading } from "../contexts/loading-context/use-loading";
import { Presentations } from "../components/presentations/presentations";

export const ProjectsPage = () => {
    const { loading } = useLoading();

    return (
        <>
            {loading && <Loading />}
            <Presentations />
        </>
    );
};
