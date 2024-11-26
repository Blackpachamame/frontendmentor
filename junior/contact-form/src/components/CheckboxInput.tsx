import { Control, Controller, FieldError } from "react-hook-form";
import { OptionsFields, FormValues } from "../models/form.model";

interface Props {
  name: keyof OptionsFields;
  control: Control<FormValues>;
  label: string;
  error?: FieldError;
}

export default function CheckboxInput({ name, control, label, error }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // Aseguramos que el campo maneje solo valores booleanos
          const isChecked =
            typeof field.value === "boolean" ? field.value : false;

          return (
            <input
              id={name}
              type="checkbox"
              {...field}
              checked={isChecked} // Controla el estado del checkbox
              value={undefined} // Elimina el value para evitar conflictos
              className="w-[18px] h-[18px] text-customGreen-50 accent-customGreen-600"
            />
          );
        }}
      />
      <label htmlFor={name} className="ml-3">
        {label} <span className="text-customGreen-600">*</span>
      </label>
      {error && <p className="text-customRed text-sm">{error.message}</p>}
    </>
  );
}
