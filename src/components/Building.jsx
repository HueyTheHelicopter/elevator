import { Container } from "react-bootstrap";
import { Floor } from "./Floor";
import { useState } from "react";

export const Building = () => {

    const [isRender, setIsRender] = useState(false);
    const [numberOfFlors] = useState(8);
    const [floorsArray, setFloorsArray] = useState([]);

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
                    <br/>
                    {floorsArray.map(fl => { return fl})}
                    <br/>
                </Container>
            :null }
        </Container>
    );
};