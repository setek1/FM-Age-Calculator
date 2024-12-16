import React from 'react'
import  './Output.css'

export const Output = ({age}) => {
  return (
    <div className='output'>
        <div className='output_item'>
            {age && age.years ? (<span className='output_number'>{age.years}</span>):
            (<span className='output_number'>--</span>)}
            <span className='output_text'>years</span>
        </div>
        <div className='output_item'>
            {age && age.months ? (<span className='output_number'>{age.months}</span>):
            (<span className='output_number'>--</span>)}
            <span className='output_text'>months</span>
        </div>
        <div className='output_item'>
            {age && age.days ? (<span className='output_number'>{age.days}</span>):
            (<span className='output_number'>--</span>)}
            <span className='output_text'>days</span>
        </div>
    </div>
  )
}
