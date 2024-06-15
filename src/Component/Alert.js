import React,{useContext} from 'react'
import { Context } from '../Context'

function Alert() {
    const{alert}=useContext(Context);
   
        let text=alert?.type.toLowerCase();
        const firstLetterCapital=text?.charAt(0).toUpperCase() + text?.slice(1);
    return (
        <div className='mt-4'>
            <div class={`alert alert-${alert?.type}`} role="alert">
                {<strong>{firstLetterCapital? firstLetterCapital : ""}</strong>} {`${alert?.msg ? alert?.msg : ""}`}
            </div>

        </div>
    )
}

export default Alert
