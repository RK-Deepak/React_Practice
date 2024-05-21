import React from 'react'
import Gun from './Gun'
import Debounce from './Debounce'
import Throttle from './Throttle'

const ThreeGuns = () => {
  return (
    <div className='major'>
        <Gun/>
        <Debounce/>
        <Throttle/>
    </div>
  )
}

export default ThreeGuns