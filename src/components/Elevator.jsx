import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import elevator from '../images/elevator.png'
import { useContext, useEffect, useState } from "react";
import style from '../styles/elevator.module.css'
import { ElevatorContext, DesiredFloorContext, MuteButtonsContext } from "../context/index.js";


export const Elevator = ({props}) => {
    const {elevatorFloor, setElevatorFloor} = useContext(ElevatorContext);
    const {desiredFloor} = useContext(DesiredFloorContext);    
    const {setMuteButtons} = useContext(MuteButtonsContext);
    const [elStyle, setElStyle] = useState(style.elevator);


    const up = () => {
        return elevatorFloor + 1
    }
    const down = () => {
        return elevatorFloor - 1
    }

    const timer = (callback) => {
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(setElevatorFloor(() => callback()))
        }, 3500))
    }

    const elevatorGoDown = async () => {
        // console.log("I'm on the "+ elevatorFloor +"'th floor, moving down to " + desiredFloor + "'th floor")
        await timer(down)
    }

    const elevatorGoUp = async () => {
        // console.log("I'm on the "+ elevatorFloor +"'th floor, moving up to " + desiredFloor + "'th floor")
        await timer(up)

    }


    const moveElevator = () => {

        if (desiredFloor <= 0 && desiredFloor === undefined) {
            console.log("Sorry, Elevator can't go into the dungeon")
            return;
        } 
        else if (desiredFloor > elevatorFloor) {
            setElStyle(style.up)
            let p = elevatorGoUp()
            console.log(p)
        }
        else if (desiredFloor < elevatorFloor) {
            setElStyle(style.down)
            let p = elevatorGoDown()
            console.log(p)
        } else return; 
    }

    useEffect(() => {
        if (elevatorFloor === desiredFloor) {
            setMuteButtons(false)
            setElStyle(style.elevator)
        } else {
            setMuteButtons(true)
            moveElevator()
        }

    }, [desiredFloor])

    return (
        <Container>
            <img className={elStyle} src={elevator} alt="elevator.png"></img>
        </Container>
    );
}