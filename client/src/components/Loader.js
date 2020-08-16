import loader from '../img/spin.gif';
import React from 'react'

const Loader = () => {
    return (
        <div className="loader">
            <img
                src={loader}
                style={{height:'100px',width:'100px'}}
                alt="Loading..."
            />
        </div>
    )
}

export default Loader;
