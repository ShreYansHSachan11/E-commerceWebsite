import React, { useState, useEffect } from 'react'
import '../newslist'
const Carousels = () => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      
        let box = document.querySelector('.politicscontainer');
        let width = box.clientWidth;
       box.scrollLeft +=  width;
       console.log('hello');
      
    }, 1000);
    
  }, []);
  
}

export default Carousels