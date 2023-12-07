import { useState } from 'react'
import './App.css'

import sofa from '../api/sofa'

function App() {
  const [image, setImage] = useState(1)

  console.log(image)

  return (
    <>
      <div id="background">
        {
          sofa.map(({id, img}) => {
            return (
              image === id ? 
                <div className='main'>
                  <img src={img} alt="" className='main_sofa' />
                </div>
              : null
            )
          })
        }
      </div>

      {
        sofa.map(({img, id, name}) => {
          return (
            
              <button className='button_img' onClick={() => setImage(id)}>
                <img src={img} alt="" />
                <h5>{name}</h5>
              </button>
              
          )

        })
      }
    </>
  )
}

export default App
