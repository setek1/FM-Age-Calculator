import React, { useState } from 'react'
import './Dates.css'
import IconSubmit from '../icons/IconSubmit'

const Dates = () => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [dayError, setDayError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)


    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    const handleDay =()=>{}
    const handleMonth =()=>{}
    const handleYear =()=>{}


  return (
    <div className='date'>
        <form className='date_form' onSubmit={handleSubmit}>
            <div className='date_controlls'>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='day'>Day</label>
                    <input type='text' value={day} id='day' className={`date_input date_inpiut-day ${dayError ? 'error' :'' }`}
                    onChange={handleDay}
                    placeholder='DD'
                    />
                    <span className='error-message date_day-error'>Must be a valid day</span>
                </div>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='month'>Month</label>
                    <input type='text' value={month} id='month' className={`date_input date_input-month ${monthError ? 'error' :'' }`}
                    onChange={handleMonth}
                    placeholder='MM'
                    />
                    <span className='error-message date_month-error'>Must be a valid motnh</span>
                </div>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='year'>Year</label>
                    <input type='text' value={year} id='year' className={`date_input date_input-year ${yearError ? 'error' :'' }`}
                    onChange={handleYear}
                    placeholder='YYYY'
                    />
                    <span className='error-message date_year-error'>Must be a valid year</span>
                </div>
            </div>
            <div className='date_actions'>
                <hr className='line'/>
                <button type='submit'><IconSubmit/></button>

            </div>
        </form>
    </div>
  )
}

export default Dates