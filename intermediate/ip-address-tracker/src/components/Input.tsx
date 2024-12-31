import { useState } from "react";
import IconArrow from "../assets/images/icon-arrow.svg";

interface InputProps {
  onIpSubmit: (ip: string) => void;
}

export default function Input({ onIpSubmit }: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validateIPv4 = (ip: string): boolean => {
    // Expresión regular para validar IPv4
    const ipv4Regex =
      /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
    return ipv4Regex.test(ip);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateIPv4(inputValue)) {
      setError(null); // Limpia el error si la IP es válida
      onIpSubmit(inputValue); // Envía la IP al componente padre
    } else {
      setError("Por favor, ingrese una dirección IPv4 válida.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-[555px]"
    >
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Enter IP Address"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`border px-6 py-2 rounded-l-xl h-[58px] w-full ${
            error ? "border-custom-Error" : ""
          }`}
        />
        <button
          type="submit"
          className="bg-black hover:bg-very-Dark-Gray text-white rounded-r-xl w-full max-w-[58px] h-[58px] flex items-center justify-center"
        >
          <img src={IconArrow} alt="Icon Arrow Submit" />
        </button>
      </div>
      {error && (
        <p className="text-custom-Error text-sm ms-2 mt-1 lg:mt-2">{error}</p>
      )}
    </form>
  );
}
