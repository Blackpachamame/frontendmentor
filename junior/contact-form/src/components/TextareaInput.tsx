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
            className={`px-5 py-2 h-60 w-full border rounded-md ${
              error ? "border-customRed" : "border-customGreen-900/50"
            }`}
          ></textarea>
        )}
      />
      {error && <p className="text-customRed text-sm">{error.message}</p>}
    </div>
  );
}
