import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface NameInputsProps {
  register: UseFormRegister<any>;
}

const NameInputs: React.FC<NameInputsProps> = ({ register }) => (
  <div className='form_label_name'>
    <div>
      <label htmlFor="firstName">First Name</label> <br />
      <input
        id="firstName"
        type="text"
        placeholder="Enter Your First Name"
        {...register('firstName')}
      />
    </div>
    <div>
      <label htmlFor="middleName">Middle Name</label> <br />
      <input
        id="middleName"
        type="text"
        placeholder="Enter Your Middle Name"
        {...register('middleName')}
      />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label> <br />
      <input
        id="lastName"
        type="text"
        placeholder="Enter Your Last Name"
        {...register('lastName')}
      />
    </div>
  </div>
);

export default NameInputs;
