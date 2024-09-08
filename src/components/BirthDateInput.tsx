import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface BirthDateInputProps {
  register: UseFormRegister<any>;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({ register }) => (
  <div className='form_label_date'>
    <label htmlFor="birthDate">Birth Date</label> <br />
    <input
      id="birthDate"
      type="date"
      placeholder="DD/MM/YYYY"
      {...register('birthDate')}
    />
  </div>
);

export default BirthDateInput;
