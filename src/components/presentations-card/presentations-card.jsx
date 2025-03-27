import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PresentationsCard = ({ data }) => {
    return (
        <Link to={`/presentation/${data}`}>
            <Card></Card>
        </Link>
    );
};
