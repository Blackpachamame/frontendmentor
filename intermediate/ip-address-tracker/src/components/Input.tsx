import { useState } from "react";

interface InputProps {
  onIpSubmit: (ip: string) => void;
}

export default function Input({ onIpSubmit }: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onIpSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter IP Address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Buscar
      </button>
    </form>
  );
}
