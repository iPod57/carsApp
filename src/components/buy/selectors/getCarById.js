import { cars } from "../data/cars"

export const getCarById = (id='') => {

    return  cars.find(h => h.id ===id)
}