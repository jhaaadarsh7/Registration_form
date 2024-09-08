import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../FormContext";
import CheckOutSteps from "./progressBar";
import NameInputs from "../components/NameInputs";
import PhoneInput from "../components/PhoneInput";
import BirthDateInput from "../components/BirthDateInput";
import GenderRadioSelector from "../components/GenderRadioSelector";
import "../App.css";
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  birthDate: z.string().min(1, "Birth date is required"),
  gender: z.enum(["Male", "Female", "Others"]),
});

type FormData = z.infer<typeof schema>;

const PersonalDetails: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { setPersonalDetails } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    setPersonalDetails(data);
    navigate("/address");
  };

  return (
    <FormProvider {...methods}>

      <CheckOutSteps activeStep={0} />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h3>Personal Details</h3>
        <div className="row">
          <div className="from_group_name">
            <NameInputs register={methods.register} />
          </div>
          <div className="from_group_phone_date">
            <PhoneInput register={methods.register} />
            <BirthDateInput register={methods.register} />
          </div>
          <div className="form_group">
          <GenderRadioSelector register={methods.register} />
          </div>
        </div>
        <div className="next_button">
          <button type="submit">Next</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default PersonalDetails;
