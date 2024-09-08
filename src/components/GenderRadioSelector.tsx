import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface GenderRadioSelectorProps {
  register: UseFormRegister<any>;
}

const GenderRadioSelector: React.FC<GenderRadioSelectorProps> = ({ register }) => (
  <div className='form_label'>
    <label>Gender</label>
    <div className='gender'>
      <input type="radio" id="male" value="Male" {...register('gender')} />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" value="Female" {...register('gender')} />
      <label htmlFor="female">Female</label>
      <input type="radio" id="others" value="Others" {...register('gender')} />
      <label htmlFor="others">Others</label>
    </div>
  </div>
);

export default GenderRadioSelector;
