import React from 'react'

function Loader() {
    return( 
    <div className='absolute bg-slate-200/20 backdrop-blur-sm flex items-center justify-center inset-0'>
    <div className='loader'></div>
    </div>
 );
}

export default Loader