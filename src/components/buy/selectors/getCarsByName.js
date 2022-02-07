import { cars } from "../data/cars"

export const getCarsByName = (name='') => {
    
    if(name === ''){
        return cars;
    }
    
    name = name.toLowerCase();
    return cars.filter(car => car.car.toLowerCase().includes(name));

}
