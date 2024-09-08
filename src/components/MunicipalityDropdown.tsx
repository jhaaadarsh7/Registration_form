import React from 'react';

interface Props {
  register: any;
  error?: string;
}

const MunicipalityDropdown: React.FC<Props> = ({ register, error }) => (
  <div className='form_label'>
    <label>Municipality/Local</label> <br />
    <select {...register('municipality')}>
      <option value="">Select Municipality</option>
      <option value="Lalitpur">Lalitpur</option>
   
    </select>
    {error && <p>{error}</p>}
  </div>
);

export default MunicipalityDropdown;
