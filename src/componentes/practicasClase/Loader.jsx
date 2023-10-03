import React from 'react' 
import './Loader.css'


const Loader = ({active}) => {
    if (!active) {
        return null
    }

    return (
        <div className="loader-overlay">
          <div className="loader">
        
          </div>
        </div>
      )
}

export default Loader