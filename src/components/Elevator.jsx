import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import elevatorDefault from'../images/elevatorStand.png';
import elevatorStand from '../images/elevatorStand1.png'
import elevatorUp from '../images/elevatorUp.png'
import elevatorDown from '../images/elevatorDown.png'
import { useContext, useEffect, useState } from "react";
import style from '../styles/elevator.module.css'
import { ElevatorContext, DesiredFloorContext, MuteButtonsContext } from "../context/index.js";


export const Elevator = ({props}) => {
    const {elevatorFloor, setElevatorFloor} = useContext(ElevatorContext);
    const {desiredFloor} = useContext(DesiredFloorContext);    
    const {setMuteButtons} = useContext(MuteButtonsContext);
    const [elStyle, setElStyle] = useState(style.elevator);
    const [elImg, setElImg] = useState(elevatorDefault);


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

    const changeElevatorVisual = (direction) => {
        switch(direction){
            case('up'):
                setElStyle(style.up)
                setElImg(elevatorUp)
                break;
            case('down'):
                setElStyle(style.down)
                setElImg(elevatorDown)
                break;
            case('stay'):
                setTimeout(() => {
                    console.log('stay')
                    setElStyle(style.elevator)
                    setElImg(elevatorStand)
                }, 1000)
            default:
                break;
        }

    }

    const moveElevator = () => {

        if (desiredFloor <= 0 && desiredFloor === undefined) {
            console.log("Sorry, Elevator can't go into the dungeon")
            return;
        } 
        else if (desiredFloor > elevatorFloor) {
            changeElevatorVisual('up')
            let p = elevatorGoUp()
            console.log(p)
        }
        else if (desiredFloor < elevatorFloor) {
            changeElevatorVisual('down')
            let p = elevatorGoDown()
            console.log(p)
        } else return; 
    }

    useEffect(() => {
        if (elevatorFloor === desiredFloor) {
            changeElevatorVisual('stay')
            setMuteButtons(false)
        } else {
            setMuteButtons(true)
            moveElevator()
        }

    }, [desiredFloor])

    return (
        <Container className="elevator container">
            <img className={elStyle} src={elImg} alt=""></img>
        </Container>
    );
}