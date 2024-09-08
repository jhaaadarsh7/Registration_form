import React from 'react';

interface Props {
  register: any;
  error?: string;
}

const WardInput: React.FC<Props> = ({ register, error }) => (
  <div className='form_label'>
    <label>Ward</label> <br />
    <input type="text" {...register('ward')} placeholder="Eg: 4" />
    {error && <p>{error}</p>}
  </div>
);

export default WardInput;
