import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface PhoneInputProps {
  register: UseFormRegister<any>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ register }) => (
  <div className='form_label_phone'>
    <label htmlFor="phone">Phone</label> <br />
    <input
      id="phone"
      type="tel"
      placeholder="Phoneno."
      {...register('phone')}
    />
  </div>
);

export default PhoneInput;
