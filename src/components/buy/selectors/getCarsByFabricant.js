import { cars } from "../data/cars"

export const getCarsByFabricant = (fabricant) => {
    
    const validFabricants = ['Nissan','Ford','Chevrolet'];
    
    if(!validFabricants.includes(fabricant)){
        throw new Error(`${fabricant} is not a valid publisher`)
    }

    return cars.filter(h => h.fabricant === fabricant);
}
