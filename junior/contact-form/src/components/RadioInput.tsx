import { Control, Controller } from "react-hook-form";
import { FormValues } from "../models/form.model";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  value: string;
}

export default function RadioInput({ name, control, label, value }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label
            className={`flex px-6 items-center h-[50px] w-full border border-customGreen-500 rounded-md ${
              field.value === value
                ? "bg-customGreen-200 border-customGreen-600"
                : ""
            }`}
          >
            <input
              id={`${name}-${value}`}
              type="radio"
              {...field}
              value={value}
              checked={field.value === value}
              // onChange={(e) => field.onChange(e.target.value)}
              className="w-5 h-5 text-customGreen-50 accent-customGreen-600"
            />
            <span className="ml-3">{label}</span>
          </label>
        )}
      />
    </>
  );
}
