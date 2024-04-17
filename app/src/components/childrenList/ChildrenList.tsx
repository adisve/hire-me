import { Container, Row, Col } from "react-bootstrap";
import { PageState, useApp } from "../../hooks/useApp";
import { Loading } from "../animations/Loading";
import { Error } from "../errors/Error";
import { ChildPreview } from "./ChildPreview";
import "./ChildrenList.scss";

export const ChildrenList = () => {
  const [state, _] = useApp();

  if (state.pageState === PageState.Loading) {
    return <Loading />;
  }

  if (state.pageState === PageState.Error) {
    return <Error />;
  }

  return (
    <div className="list-container">
      <header className="list-container-content">
        <Container fluid className="children">
          <Row>
            {state.visibleChildren.map((child, index) => (
              <Col key={index} xxl={3} xl={6} lg={6} md={6} sm={12}>
                <ChildPreview child={child} />
              </Col>
            ))}
          </Row>
        </Container>
        {state.lastChildIndex < (state.children.length || 0) && (
          <div className="loading-more-children">
            <Loading />
          </div>
        )}
      </header>
    </div>
  );
};
