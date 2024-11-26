import { Control, Controller, FieldError } from "react-hook-form";
import { OptionsFields, FormValues } from "../models/form.model";

interface Props {
  name: keyof OptionsFields; // Nombre del campo (queryType, etc.)
  control: Control<FormValues>; // Control de React Hook Form
  label: string; // Etiqueta para el radio
  value: string; // Valor específico para este radio
  error?: FieldError; // Error si aplica
}

export default function RadioInput({
  name,
  control,
  label,
  value,
  error,
}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label className="flex px-6 items-center h-[50px] w-full border border-customGreen-900 rounded-md focus:ring-customGreen-500 focus:border-customGreen-500">
            <input
              id={`${name}-${value}`} // ID único para accesibilidad
              type="radio"
              {...field}
              value={value} // Asignamos el valor del radio
              checked={field.value === value} // Controla si el radio está seleccionado
              onChange={(e) => field.onChange(e.target.value)} // Actualiza el valor en el formulario
              className="w-[18px] h-[18px] text-customGreen-50 accent-customGreen-600"
            />
            <span className="ml-3">{label}</span>
          </label>
        )}
      />
      {error && <p className="text-customRed text-sm">{error.message}</p>}
    </>
  );
}
