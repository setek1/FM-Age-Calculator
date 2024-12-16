import React, { useState } from 'react'
import './Dates.css'
import IconSubmit from '../icons/IconSubmit'
import {validateDay,validateMonth,validateYear} from '../utils/validate'
import {calculateAge} from '../utils/calculateAge'

const Dates = ({onAge}) => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [dayError, setDayError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)


    
    const handleDay =(e)=>{
        const value=e.target.value;
        setDay(value.replace(/[^0-9]/g, ''))
        console.log(value,'Texto dentro del input')
        if(value.toString().length >1 && !validateDay(parseInt(e.target.value))){
            setDayError(true)
        }else{
            setDayError(false)
        }
        
    }
    const handleMonth =(e)=>{
        const value=e.target.value;
        setMonth(value.replace(/[^0-9]/g, ''));
        if(value.toString().length>1 && validateMonth(parseInt(e.target.value))){
            setMonthError(true)
        }else{
            setMonthError(false)
        }
    }
    const handleYear =(e)=>{
        const value=e.target.value;
        console.log(value.toString().length,'LARGO')
        setYear(value.replace(/[^0-9]/g, ''));
        if(value.toString().length > 0 && !validateYear(parseInt(e.target.value))){
            setYearError(true)
        }else{
            setYearError(false)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(day==='' || month==='' || year===''){
            if(day===''){
                setDayError(true);
            }
            if(month===''){
                setMonthError(true);
            }
            if(year===''){
                setYearError(true);
            }
        }

        onAge(calculateAge(day, month, year))
    }


  return (
    <div className='date'>
        <form className='date_form' onSubmit={handleSubmit}>
            <div className='date_controlls'>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='day'>Day</label>
                    <input type='text' value={day} id='day' className={`date_input date_input-day ${dayError ? 'error' :'' }`}
                    onChange={handleDay}
                    placeholder='DD'
                    maxLength={2}
                    />
                    <span className='error-message date_day-error'>Must be a valid day</span>
                </div>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='month'>Month</label>
                    <input type='text' value={month} id='month' className={`date_input date_input-month ${monthError ? 'error' :'' }`}
                    onChange={handleMonth}
                    placeholder='MM'
                    maxLength={2}
                    />
                    <span className='error-message date_month-error'>Must be a valid motnh</span>
                </div>
                <div className='date_controll'>
                    <label className='date_control-label' htmlFor='year'>Year</label>
                    <input type='text' value={year} id='year' className={`date_input date_input-year ${yearError ? 'error' :'' }`}
                    onChange={handleYear}
                    placeholder='YYYY'
                    maxLength={4}
                    />
                    <span className='error-message date_year-error'>Must be a valid year</span>
                </div>
            </div>
            <div className='date_actions'>
                <hr className='line'/>
                <button type='submit'><IconSubmit/></button>
                <hr className='hidden-line'/>

            </div>
        </form>
    </div>
  )
}

export default Dates