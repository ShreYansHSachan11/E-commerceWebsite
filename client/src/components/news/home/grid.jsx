import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./grid.css"
import Card from "./cards"



const Hero = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            var obj = await axios.get(`https://newsapi.org/v2/everything?q=un campaigns+&apiKey=34cd2f8a2a0d418692b57ea7e6c66cb5`);
            obj.data.articles.length=5;
            setArticles(obj.data.articles)
            console.log(obj)
        }

        getArticles()
    }, [])

  return (
    <>
      <section className='hero'>
        <div className='container '>
          {articles.map((artic) => {
            return (
              <>
                return(
                    <Card
                        title={artic.title}
                        description={artic.description}
                        url={artic.url}
                        urlToImage={artic.urlToImage} 
                        author={artic.author}

                    />
                    
                    
                )
              </>
            )
          })}
          
        </div>
      </section>
    </>
  )
}

export default Hero