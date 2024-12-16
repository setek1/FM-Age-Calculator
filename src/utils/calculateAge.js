import React from 'react'

export const calculateAge = (day,month,year) => {
    if (day.toString().length ===1){
        day='0' + day
    }
    if(month.toString().length ===1){
        month='0'+ month;
    }
    let dateBirth=`${year}-${month}-${day}`;

    let today =new Date();
    let birthDate= new Date(dateBirth)
    
    let years=today.getFullYear()- birthDate.getFullYear();
    let months= today.getMonth() - birthDate.getMonth();
    let days= today.getDate()-birthDate.getDate();

    if(months <0 || (months ===0 && days<0)){
        years--;
        months+=12;
    }

    if(days<0){
        let prevMonth= new Date(today.getFullYear(), today.getMonth()-1,0)
        days+= prevMonth.getDate()
        months--;
    }


  return {years:years,months: months, days: days}
}
