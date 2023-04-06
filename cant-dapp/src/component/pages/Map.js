import React from 'react';
import map from '../../asset/map.png'

export const Map = () => {
    
    return(
        <div className='h-screen p-20 justify-center bg-purple-900'>
            <img src={map} className='h-500 w-500 bg-sky-500 ' alt='map' />
        </div>
    )
}