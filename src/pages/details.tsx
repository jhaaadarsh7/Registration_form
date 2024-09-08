import React from 'react';

import { useFormContext } from '../FormContext';

const Details: React.FC = () => {
  const { personalDetails, addressDetails, image } = useFormContext();


  

  return (
    <div className="checkout-containers">
       
        <div className="check">
          <h3 style={{textAlign:'center'}}>My Details</h3>

          <div>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Profile" />
            ) : (
              <p>No Image</p>
            )}
          </div>

          <h3>Personal Details</h3>
          <div className="details_row">
            <p> <span>First Name:</span>  {personalDetails?.firstName}</p>
            <p> <span>Middle Name: </span> {personalDetails?.middleName}</p>
            <p> <span>Last Name:</span>  {personalDetails?.lastName}</p>
            <p> <span>Phone:</span> {personalDetails?.phone}</p>
            <p> <span> Birth Date: </span>{personalDetails?.birthDate}</p>
            <p> <span>Gender:</span>  {personalDetails?.gender}</p>
          </div>

          <h3>Address Details</h3>
          
          <div className="details_row"> 
            <p><span>Country:</span> {addressDetails?.country}</p>
            <p><span>City:</span> {addressDetails?.city}</p>
            <p><span>District:</span> {addressDetails?.district}</p>
            <p><span>Municipality:</span> {addressDetails?.municipality}</p>
            <p><span>Ward:</span> {addressDetails?.ward}</p>
          </div>
        </div>
      </div>
  );
};

export default Details;
