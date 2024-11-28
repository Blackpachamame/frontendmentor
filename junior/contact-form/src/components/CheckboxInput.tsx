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
            />
          );
        }}
      />
      <label htmlFor={name}>
        {label} <span className="text-customGreen-600">*</span>
      </label>
    </div>
  );
}
