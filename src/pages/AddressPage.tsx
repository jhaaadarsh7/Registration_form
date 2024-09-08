import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../FormContext";
import CheckOutSteps from "./progressBar";

import CountryDropdown from "../components/CountryDropdown";
import DistrictDropdown from "../components/DistrictDropdown";
import MunicipalityDropdown from "../components/MunicipalityDropdown";
import CityInput from "../components/CityInput";
import WardInput from "../components/WardInput";

const addressSchema = z.object({
  country: z.string().min(1, "Country is required"),
  district: z.string().min(1, "District is required"),
  municipality: z.string().min(1, "Municipality/Local is required"),
  city: z.string().min(1, "City is required"),
  ward: z.string().min(1, "Ward is required"),
});

type AddressFormData = z.infer<typeof addressSchema>;

const AddressPage: React.FC = () => {
  const { setAddressDetails } = useFormContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data: AddressFormData) => {
    setAddressDetails(data);
    navigate("/images");
  };

  return (
    <>
      <CheckOutSteps activeStep={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Address</h3>

        <div className="row">
          <div className="drop">
            <CountryDropdown
              register={register}
              error={errors.country?.message}
            />
            <DistrictDropdown
              register={register}
              error={errors.district?.message}
            />
            <MunicipalityDropdown
              register={register}
              error={errors.municipality?.message}
            />
          </div>
          <div className="name_input">
            <CityInput register={register} error={errors.city?.message} />
            <WardInput register={register} error={errors.ward?.message} />
          </div>
        </div>

        <div className="next_button">
          <button type="button" className="back" onClick={() => navigate("/")}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
};

export default AddressPage;
