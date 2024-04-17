import { Spinner } from "react-bootstrap";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
