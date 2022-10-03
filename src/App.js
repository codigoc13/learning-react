import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './App.css'

const images=[
  "https://cdn.pixabay.com/photo/2017/02/13/08/54/brain-2062057_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/11/24/18/50/mind-544404_960_720.png",
  "https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_960_720.jpg"
]
const App = () => {
  return (
    <div>
     <Slide duration={3000}>
     {
        images.map((image, index) => (
          <div>
            <div key={index} className='each-slide-effect' >
              <img src={image} className='image' />

              <a href='https://www.google.com' target="_blank">Ver más</a>
            </div>
          </div>
        )
        )
      }
     </Slide>
    </div>
  )
}

export default App