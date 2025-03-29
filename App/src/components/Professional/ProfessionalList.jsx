import React from 'react';
import {professional} from './../../assets/data/professional';
import ProfessionalCard from './ProfessionalCard';

const ProfessionalList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {professional.map((professional)=> <ProfessionalCard key={professional.id} professional={professional}/>)}
    </div>
  )
}

export default ProfessionalList