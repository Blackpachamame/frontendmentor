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
            {...field}
            value={field.value === true ? "" : field.value}
            className={`px-5 h-[50px] w-full border rounded-md ${
              error ? "border-customRed" : "border-customGreen-900/50"
            }`}
          />
        )}
      />
      {error && <p className="text-customRed text-sm">{error.message}</p>}
    </div>
  );
}
