import { Container, Col } from "react-bootstrap";
import { Floor } from "./Floor";
import { useState, useContext } from "react";
import { ElevatorContext } from "../context";

export const Building = () => {

    const [isRender, setIsRender] = useState(false);
    const [numberOfFlors] = useState(8);
    const [floorsArray, setFloorsArray] = useState([]);
    const {elevatorFloor} = useContext(ElevatorContext)

    const makeFloors = () => {
        let t_arr = [];
        for (let f = numberOfFlors; f >= 0; f--){
             t_arr.push(<Floor key={f} props={f+1}/>)
        }
        setFloorsArray(t_arr)
        setIsRender(true)
    }

    useState(() => {
        makeFloors()
    }, [])

    return (
        <Container className="building p-3">
            {isRender ?
                <Container>
                    <Col className="mb-4">
                        <span className="_">
                            Elevator is on the {elevatorFloor}'th floor
                        </span>
                    </Col>
                    {floorsArray.map(fl => { return fl})}
                </Container>
            :null }
        </Container>
    );
};