import { Button, Container, Row, Col, Alert, Modal} from "react-bootstrap";
import { useContext, useState } from "react";
import { ElevatorContext, DesiredFloorContext, MuteButtonsContext } from "../context/index.js";


export const ControlButtons = () => {

    const {elevatorFloor} = useContext(ElevatorContext);
    const {desiredFloor, setDesiredFloor} = useContext(DesiredFloorContext);
    const {muteButtons, setMuteButtons} = useContext(MuteButtonsContext);
    const [msg, setMsg] = useState('')
    const [showModal, setShowModal] = useState(false)

    const onFloorButtonClicked = (f) => {
        if (f === desiredFloor && desiredFloor === elevatorFloor){
            console.log("But you alredy here...")
        } else {
            switch(muteButtons){
                case(true):
                    setMsg('Buttons muted while elevator is moving')
                    setShowModal(true);
                    setTimeout(() => {
                        setShowModal(false)
                    }, 3700)
                    break;
                case(false):
                    setDesiredFloor(f);
                    break;
                default:
            }
        }
    }

    const handleHideModal = () => {
        setShowModal(false)
    }

    return (
        <Container className="buttons container">
            <Row className="mb-4">
                <Alert variant="danger" show={showModal}>
                    {msg}
                </Alert>
                <Alert variant="success">
                    <Alert.Heading>
                        Elevator is on the {elevatorFloor}'th floor
                    </Alert.Heading>
                </Alert>
            </Row>
            <Row className="buttons row">
                <Col className="buttons col">
                    <Button onClick={() => onFloorButtonClicked(7)}>7</Button>
                    <Button className="mx-2 my-1" onClick={() => onFloorButtonClicked(8)}>8</Button>
                    <Button onClick={() => onFloorButtonClicked(9)}>9</Button>
                </Col>
            </Row>
            <Row className="buttons row">
                <Col className="buttons col">
                    <Button onClick={() => onFloorButtonClicked(4)}>4</Button>
                    <Button className="mx-2 my-1" onClick={() => onFloorButtonClicked(5)}>5</Button>
                    <Button onClick={() => onFloorButtonClicked(6)}>6</Button>
                </Col>
            </Row>
            <Row className="buttons row">
                <Col className="buttons col">
                    <Button onClick={() => onFloorButtonClicked(1)}>1</Button>
                    <Button className="mx-2 my-1" onClick={() => onFloorButtonClicked(2)}>2</Button>
                    <Button onClick={() => onFloorButtonClicked(3)}>3</Button>
                </Col>
            </Row>
        </Container>
    );
}