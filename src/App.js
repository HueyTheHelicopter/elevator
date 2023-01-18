import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Building } from './components/Building';
import { ControlButtons } from './components/ControlButtons';
import {  useState } from "react";
import { ElevatorContext, DesiredFloorContext, MuteButtonsContext } from './context/index.js';

function App() {
  const [desiredFloor, setDesiredFloor] = useState(5);
  const [elevatorFloor, setElevatorFloor] = useState(5);
  const [muteButtons, setMuteButtons] = useState(false);

  return (
    <div className="App App-header">
    <DesiredFloorContext.Provider value={{desiredFloor, setDesiredFloor}}>
    <ElevatorContext.Provider value={{elevatorFloor, setElevatorFloor}}>
    <MuteButtonsContext.Provider value={{muteButtons, setMuteButtons}}>
      <Container fluid>
        <Row className="my-3">
          <Col >
            <span className="_">
              Elevator is on the {elevatorFloor}'th floor
            </span>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={9}>
            <Building/>
          </Col>
          <Col sm={3}>
            <ControlButtons/>
          </Col>
        </Row>
      </Container>
    </MuteButtonsContext.Provider>
    </ElevatorContext.Provider>
    </DesiredFloorContext.Provider>
    </div>
  );
}

export default App;
