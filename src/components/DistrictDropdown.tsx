import React from 'react';

interface Props {
  register: any;
  error?: string;
}

const DistrictDropdown: React.FC<Props> = ({ register, error }) => (
  <div className='form_label'>
    <label>District</label> <br />
    <select {...register('district')}>
      <option value="">Select District</option>
      <option value="Kathmandu">Kathmandu</option>
    
    </select>
    {error && <p>{error}</p>}
  </div>
);

export default DistrictDropdown;
