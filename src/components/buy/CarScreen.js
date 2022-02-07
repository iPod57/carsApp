import { useParams, Navigate } from "react-router-dom";
import { getCarById } from "./selectors/getCarById";

export const CarScreen = () => {

    const {carId} = useParams();

    const car = getCarById(carId);

    if(!car){
        return <Navigate to='/buy'/>
    } 

    return (
        <>

        </>
    );
};
