import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { CarCard } from './CarCard';
import { useForm } from '../../hooks/useForm';
import { getCars } from './selectors/getCars';

export const BuyScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const {q=''} = queryString.parse(location.search);
    
    //location.search muestra ?=batman y el q solo el batman

    const [{searchText},handleInputChange] = useForm({
        searchText: q
    });
    
    const carsFiltered = useMemo(() => getCars(q),[q]);

    const handleSearch = (e) => {
        
        e.preventDefault();
        navigate(`?q=${searchText}`)

    }

    return (
        <div className='main__content'>

            <div>
                <div className='kavak_containersearch'>
                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='Buscar por marca, modelo, color...'
                            className='form-control searchbox'
                            name='searchText'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={searchText}
                        />


                    </form>
                </div>

                <div className=''>
                    <hr />
                    {
                        (carsFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados de: {q}</div>
                    }
                    <div className='row rows-cols-1 row-cols-md-5 g3'>
                        {
                            carsFiltered.map(h => (
                                <CarCard 
                                    key={h.id}{...h}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
