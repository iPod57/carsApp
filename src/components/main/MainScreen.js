import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FirstMain } from './FirstMain';
import { SecondMain } from './SecondMain';

const kavakImage = require.context('../images',true);

export const MainScreen = () => {

    //const {active} = useSelector(state => state.notes)
    const navigate = useNavigate();

    return (
        
        <div className='main__content'>
            
            <FirstMain navigate={navigate}/>
            
            <SecondMain />

            <main>
                <img className='kavak__image'
                        src={kavakImage(`./kavak.png`)}
                        alt='kavak2'
                />
                
            </main>

            <button 
                    type='submit'
                    className="btn btn-kavak"
                    onClick={() =>navigate('/sell')}
                >
                    Sell A Car
            </button>

        </div>
    )
}
