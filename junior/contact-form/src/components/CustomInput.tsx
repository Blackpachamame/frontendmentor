import { Control, Controller, FieldError } from "react-hook-form";
import { TextFields, FormValues } from "../models/form.model";

interface Props {
  name: keyof TextFields;
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
            className={`h-[50px] w-full border rounded-md ${
              error ? "border-customRed" : "border-customGreen-900"
            }`}
          />
        )}
      />
      {error && <p className="text-customRed">{error.message}</p>}
    </div>
  );
}
