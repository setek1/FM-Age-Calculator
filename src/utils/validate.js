export const validateDay=(day)=>day >=1 && day <=31;

export const validateMonth=(month)=>month<1 || month >12;

export const validateYear=(year)=>{
    const currentYear=new Date().getFullYear();
    return year >= 1950 && year <=currentYear
}

