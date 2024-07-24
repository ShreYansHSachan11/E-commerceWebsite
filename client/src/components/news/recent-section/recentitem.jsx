import React from 'react'
import './recent.css'

const Recentitem = ({ title, description, url, urlToImage,author }) => {
    return (
        <div className="recent">
            
                <div className="item">
                 <h1>{title}</h1>
                 <p>{author}</p>
                <img className='newsimg' src={urlToImage} alt={urlToImage} />
                <p>{description}</p>
                </div>
                
            
                
            </div>
        
    )
}

export default Recentitem