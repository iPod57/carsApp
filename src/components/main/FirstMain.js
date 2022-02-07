import React from 'react';

export const FirstMain = ({navigate}) => {
  
  return <>
        <main className='kavak__container'>

            <img className='kavak__image'
                src={'https://images.kavak.services/mx/assets/images/home/webp/main-hero-lg.webp'}
                alt='Img'
            />
            <div className="kavak__text-infront_title"><b>Transformamos la compra y</b></div>
            <div className="kavak__text-infront_title mt-5"><b>venta de autos seminuevos</b></div>
            <div className="kavak__text-infront_subtitle"><b>Tenemos +10,000 autos certificados y garantizados</b></div>
            
            <button 
                type='submit'
                className="btn btn-kavak kavak__btn-infront"
                onClick={() =>navigate('/buy')}
            >
                Comprar Un Auto
            </button>

        </main>
  </>;
};
