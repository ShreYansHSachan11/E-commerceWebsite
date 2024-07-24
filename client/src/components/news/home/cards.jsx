import React from "react"
import arrow from './images/right-arrow.png'

const Card = ({  title, description, url, urlToImage,author  } ) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={urlToImage} alt='' />
        </div>
        <div className='text'>
          {/* <span className='category'>{category}</span> */}
          {/*<h1 className='titleBg'>{title}</h1>*/}
          
            <h1 className='titleBg'>{title}</h1>
          
          <div className='author flex'>
            {/* <span>by {author}</span> */}
            {/* <span>{description}</span> */}
            <button className="read"><a href={url}>Read more</a> <img src={arrow} alt="" srcset="" /></button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
