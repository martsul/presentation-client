import { ClipLoader } from "react-spinners";

export const Loading = () => {
    return (
        <div
            style={{ zIndex: "1" }}
            className="bg-opacity-50 bg-secondary position-absolute d-flex align-items-center justify-content-center w-100 h-100 top-0 left-0"
        >
            <ClipLoader color="#36d7b7" size={50} loading={true} />
        </div>
    );
};
