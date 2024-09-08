import React from 'react';
import { Typography, Stepper, StepLabel, Step } from '@mui/material';
import './CheckoutSteps.css';
import { FaGraduationCap } from "react-icons/fa";

// Define types for props
interface CheckOutStepsProps {
  activeStep: number;
}

const CheckOutSteps: React.FC<CheckOutStepsProps> = ({ activeStep }) => {
  const steps = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
  ];

  return (
    <div className='checkout-container'>
      <Stepper alternativeLabel activeStep={activeStep} sx={{ boxSizing: 'border-box', width: '100%' }}>
        {steps.map((item, index) => (
          <Step key={index} active={activeStep === index} completed={activeStep >= index}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeStep >= index ? '#FFFFFF' : '#43056C', // Text color for active step
                  backgroundColor: activeStep >= index ? '#4DAF4E' : '#43056C', // Background color for active step
                  borderRadius: '50%', // Circular shape
                  width: '40px',
                  height: '40px',
                  margin: '0 auto',
                  marginTop:activeStep >= index ? '15px' : '15px',
                 
                },
                '& .MuiStepIcon-root': {
                  display: 'none', // Hide the default icon
                },
              }}
            >
              <Typography variant="body2" sx={{ color: activeStep === index ? '#FFFFFF' : '#ffffff' }}>
                {item.label}
              </Typography>
              {activeStep === index && (
                <Typography className='cap'>
                  <FaGraduationCap className='icon' />
                </Typography>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckOutSteps;
