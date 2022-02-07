import { CarCard } from "./CarCard";
import { getCarsByFabricant } from "./selectors/getCarsByFabricant";

export const CarList = ({fabricant}) => {
  
    const cars = getCarsByFabricant(fabricant);

    return( 
        <>
            <h1>Car List - {fabricant}</h1>
            <ul>
                {
                    cars.map(c => (
                        <CarCard 
                            key={c.id}
                            {...c}
                        />
                    ))
                }
            </ul>
        </>
    );
};
