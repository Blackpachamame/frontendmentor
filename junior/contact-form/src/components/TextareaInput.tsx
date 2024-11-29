import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../models/form.model";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  error?: FieldError;
}

export default function TextareaInput({ name, control, label, error }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {label} <span className="text-customGreen-600">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            id={name}
            {...field}
            value={field.value === true ? "" : field.value}
            rows={4}
            className={`px-5 py-2 min-h-60 md:min-h-[105px] w-full border rounded-md hover:border-customGreen-600 focus-visible:outline-0 focus-visible:border-customGreen-600 ${
              error ? "border-customRed" : "border-customGreen-500"
            }`}
            aria-required="true"
            aria-labelledby={name} // Asocia el textarea con el label
            aria-describedby={`${name}-error`} // Relaciona el mensaje de error con el textarea
          ></textarea>
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
