import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../models/form.model";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

export default function CustomInput({
  name,
  control,
  label,
  type,
  error,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {label} <span className="text-customGreen-600">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...(type === "email" ? { autoComplete: "off" } : {})}
            {...field}
            value={field.value === true ? "" : field.value}
            className={`px-5 h-[50px] w-full border rounded-md hover:border-customGreen-600 focus-visible:outline-0 focus-visible:border-customGreen-600 ${
              error ? "border-customRed" : "border-customGreen-500"
            }`}
            aria-required="true"
            aria-labelledby={name}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="text-customRed"
          role="alert"
          aria-live="assertive"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
