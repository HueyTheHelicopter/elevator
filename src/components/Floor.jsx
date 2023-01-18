import { useContext } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap"
import { ElevatorContext } from "../context/index.js";
import { Elevator } from "./Elevator.jsx";

export const Floor = ({props}) => {

    const thisFloor = props;
    const {elevatorFloor} = useContext(ElevatorContext);


    return (
        <Container className="floor container">
            <Row className="floor row">
                <Col sm={8} className="floor col">
                        <Alert variant="info" className="mt-3">
                            {thisFloor}'th floor
                        </Alert>
                </Col>
                <Col sm={4} className="floor elevator col">
                    {thisFloor === elevatorFloor ?
                        <Elevator/>
                        : null
                    }
                </Col>
            </Row>
        </Container>
    );
};