import React from 'react';

interface Props {
  register: any;
  error?: string;
}

const CountryDropdown: React.FC<Props> = ({ register, error }) => (
  
  <div className='form_label'>
    <label>Country</label> <br />
    <select {...register('country')}>
      <option value="">Select Country</option>
      <option value="Nepal">Nepal</option>
    
    </select>
    {error && <p>{error}</p>}
  </div>
);

export default CountryDropdown;
