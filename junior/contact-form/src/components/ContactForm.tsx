import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, contactFormSchema } from "../models/form.model";
import CustomInput from "./CustomInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white p-6 md:p-10 rounded-xl shadow-md max-w-[736px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-customGreen-900">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6"
      >
        <fieldset className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
          <CustomInput
            name="firstName"
            control={control}
            label="First Name"
            type="text"
            error={errors.firstName}
          />
          <CustomInput
            name="lastName"
            control={control}
            label="Last Name"
            type="text"
            error={errors.lastName}
          />
        </fieldset>

        <fieldset>
          <CustomInput
            name="email"
            control={control}
            label="Email Address"
            type="email"
            error={errors.email}
          />
        </fieldset>

        <fieldset className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
          <legend className="mb-2">
            Query Type <span className="text-customGreen-600">*</span>
          </legend>
          <RadioInput
            name="queryType"
            control={control}
            label="General Enquiry"
            value="General Enquiry"
            error={errors.queryType}
          />
          <RadioInput
            name="queryType"
            control={control}
            label="Support Request"
            value="Support Request"
            error={errors.queryType}
          />
        </fieldset>

        <fieldset>
          <TextareaInput
            name="message"
            control={control}
            label="Message"
            error={errors.message}
          />
        </fieldset>

        <fieldset className="grid grid-cols-[18px_auto] items-center px-2">
          <CheckboxInput
            name="consent"
            control={control}
            label="I consent to being contacted by the team"
            error={errors.message}
          />
        </fieldset>

        <button
          type="submit"
          className="w-full h-[60px] bg-customGreen-600 text-white py-2 px-4 rounded-md shadow hover:bg-customGreen-900"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
