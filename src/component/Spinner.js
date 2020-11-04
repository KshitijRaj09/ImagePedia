import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
    return (
        <div style ={{width :'50%', height:'200px', marginLeft:'50%'}}>
         <img src={spinner} alt="Loading...."  />
        </div>
    )
}