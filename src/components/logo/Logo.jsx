import React from 'react'
import { Tilt } from 'react-tilt'
import { PiBrainBold } from "react-icons/pi";
import './logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className='Tilt br2 shadow-2' options={{max:55}}  style={{height:150, width: 150}}>
          <div className='Tilt-inner pa3'>
            <span><PiBrainBold /></span>
          </div>
        </Tilt>
    </div>
  )
}

export default Logo