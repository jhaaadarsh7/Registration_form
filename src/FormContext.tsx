import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for form data
interface FormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  birthDate: string;
  gender: 'Male' | 'Female' | 'Others';
}

interface AddressFormData {
  country: string;
  city: string;
  district: string;
  municipality: string;
  ward: string;
}

interface FormContextType {
  personalDetails: FormData | null;
  addressDetails: AddressFormData | null;
  image: File | null;
  setPersonalDetails: (data: FormData) => void;
  setAddressDetails: (data: AddressFormData) => void;
  setImage: (file: File) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState<FormData | null>(null);
  const [addressDetails, setAddressDetails] = useState<AddressFormData | null>(null);
  const [image, setImage] = useState<File | null>(null);

  return (
    <FormContext.Provider value={{ personalDetails, addressDetails, image, setPersonalDetails, setAddressDetails, setImage }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
