import { cars } from "../data/cars"

export const getCars = (search='') => {
    
    if(search === ''){
        return cars;
    }
    
    search = search.toLowerCase();

    if((cars.filter(car => car.car.toLowerCase().includes(search))).length!=0){
        return cars.filter(car => car.car.toLowerCase().includes(search));
    }

    if(cars.filter(car => car.color.toLowerCase().includes(search)).length!=0){
        return cars.filter(car => car.color.toLowerCase().includes(search));
    }

    if(cars.filter(car => car.fabricant.toLowerCase().includes(search)).length!=0){
        return cars.filter(car => car.fabricant.toLowerCase().includes(search));
    }

    return [];
}
