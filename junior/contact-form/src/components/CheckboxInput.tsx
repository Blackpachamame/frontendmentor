import { Control, Controller } from "react-hook-form";
import { FormValues } from "../models/form.model";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
}

export default function CheckboxInput({ name, control, label }: Props) {
  return (
    <div className="grid grid-cols-[18px_auto] gap-5 items-center mt-3 px-1">
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const isChecked =
            typeof field.value === "boolean" ? field.value : false;

          return (
            <input
              id={name}
              type="checkbox"
              {...field}
              checked={isChecked}
              value={undefined} // Elimina el value para evitar conflictos
              aria-required="true"
              aria-labelledby={`${name}-label`} // Asocia la etiqueta con el checkbox
            />
          );
        }}
      />
      <label id={`${name}-label`} htmlFor={name}>
        {label} <span className="text-customGreen-600">*</span>
      </label>
    </div>
  );
}
