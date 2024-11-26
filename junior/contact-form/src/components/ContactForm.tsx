import { z } from "zod";

const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email Address is required" }),
  queryType: z.enum(["General Enquiry", "Support Request"], {
    required_error: "Please select a query type",
  }),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "To submit this form, please consent yo being contacted",
    }),
  }),
});

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      queryType: formData.get("queryType") as
        | "General Enquiry"
        | "Support Request",
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
    };

    try {
      ContactFormSchema.parse(data);
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md max-w-[736px] mx-auto"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-customGreen-900">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 gap-6">
        <fieldset className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">
              First Name <span className="text-customGreen-600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">
              Last Name <span className="text-customGreen-600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500"
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email">
            Email Address <span className="text-customGreen-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500"
          />
        </fieldset>

        <fieldset className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
          <legend className="text-sm mb-2">
            Query Type <span className="text-customGreen-600">*</span>
          </legend>
          <label className="flex px-6 items-center h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500">
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              className="text-customGreen-500 focus:ring-customGreen-500 w-5 h-5"
            />
            <span className="ml-3">General Enquiry</span>
          </label>

          <label className="flex px-6 items-center h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500">
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              className="text-customGreen-500 focus:ring-customGreen-500 w-5 h-5"
            />
            <span className="ml-3">Support Request</span>
          </label>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="message">
            Message <span className="text-customGreen-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full h-60 border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500"
          ></textarea>
        </fieldset>

        <fieldset className="grid grid-cols-[18px_auto] items-center px-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="w-[18px] h-[18px] text-customGreen-500 focus:ring-customGreen-500 appearance-none border-2 border-gray-400 checked:bg-customGreen-500"
          />
          <label htmlFor="consent" className="ml-3">
            I consent to being contacted by the team{" "}
            <span className="text-customGreen-600">*</span>
          </label>
        </fieldset>

        <button
          type="submit"
          className="w-full h-[60px] bg-customGreen-600 text-white py-2 px-4 rounded-md shadow hover:bg-customGreen-900"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
