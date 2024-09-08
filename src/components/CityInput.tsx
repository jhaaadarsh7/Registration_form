import React from 'react';

interface Props {
  register: any;
  error?: string;
}

const CityInput: React.FC<Props> = ({ register, error }) => (
  <div className='form_label'>
    <label>City</label> <br />
    <input type="text" {...register('city')} placeholder="Eg: Kathmandu" />
    {error && <p>{error}</p>}
  </div>
);

export default CityInput;
