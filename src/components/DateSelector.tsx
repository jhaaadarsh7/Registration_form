import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface DateSelectorProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const DateSelector: React.FC<DateSelectorProps> = ({ register, errors }) => {
  return (
    <div className="form_label_date">
      <input type="date" {...register('dateOfBirth')} />
      {errors.dateOfBirth && <div>{errors.dateOfBirth.message}</div>}
    </div>
  );
};

export default DateSelector;
