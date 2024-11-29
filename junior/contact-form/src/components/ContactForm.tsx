import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormValues, contactFormSchema } from "../models/form.model";
import CustomInput from "./CustomInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import { CustomToastSuccess } from "./CustomToast";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      messageArea: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    toast(
      <CustomToastSuccess
        title="Message Sent!"
        message="Thanks for completing the form. We'll be in touch soon!"
      />,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      }
    );
    reset();
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

        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2">
            Query Type <span className="text-customGreen-600">*</span>
          </legend>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
            <RadioInput
              name="queryType"
              control={control}
              label="General Enquiry"
              value="General Enquiry"
            />
            <RadioInput
              name="queryType"
              control={control}
              label="Support Request"
              value="Support Request"
            />
          </div>
          {errors.queryType && (
            <p className="text-customRed" role="alert" aria-live="assertive">
              {errors.queryType.message}
            </p>
          )}
        </fieldset>

        <fieldset>
          <TextareaInput
            name="messageArea"
            control={control}
            label="Message"
            error={errors.messageArea}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <CheckboxInput
            name="consent"
            control={control}
            label="I consent to being contacted by the team"
          />
          {errors.consent && (
            <p className="text-customRed" role="alert" aria-live="assertive">
              {errors.consent.message}
            </p>
          )}
        </fieldset>

        <button
          type="submit"
          className="w-full mt-3 h-[60px] bg-customGreen-600 text-white py-2 px-4 rounded-md shadow hover:bg-customGreen-900"
          aria-label="Submit the contact form"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
