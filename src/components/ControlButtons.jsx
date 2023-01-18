import { Button, Container, Row, Col} from "react-bootstrap";
import { useContext, useState } from "react";
import { ElevatorContext, DesiredFloorContext, MuteButtonsContext } from "../context/index.js";


export const ControlButtons = () => {

    const {elevatorFloor} = useContext(ElevatorContext);
    const {desiredFloor, setDesiredFloor} = useContext(DesiredFloorContext);
    const {muteButtons, setMuteButtons} = useContext(MuteButtonsContext);
    const [msg, setMsg] = useState('')

    const onFloorButtonClicked = (f) => {
        if (f === desiredFloor && desiredFloor === elevatorFloor){
            console.log("But you alredy here...")
        } else {
            switch(muteButtons){
                case(true):
                    setMsg('buttons are muted while elevator moving')
                    console.log(msg)
                    break;
                case(false):
                    setDesiredFloor(f);
                    break;
                default:
            }
        }
    }

    return (
        <Container className="buttons container">
            <Row className="buttons row">
                <Col className="buttons col">
                    <Button onClick={() => onFloorButtonClicked(9)}>9</Button>
                    <Button className="mx-2 my-1" onClick={() => onFloorButtonClicked(8)}>8</Button>
                    <Button onClick={() => onFloorButtonClicked(7)}>7</Button>
                </Col>
            </Row>
            <Row className="buttons row">
                <Col className="buttons col">
                    <Button onClick={() => onFloorButtonClicked(6)}>6</Button>
                    <Button className="mx-2 my-1" onClick={() => onFloorButtonClicked(5)}>5</Button>
                    <Button onClick={() => onFloorButtonClicked(4)}>4</Button>
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