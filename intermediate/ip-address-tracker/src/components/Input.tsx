import { useState } from "react";
import IconArrow from "../assets/images/icon-arrow.svg";

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
    <form onSubmit={handleSubmit} className="flex w-full max-w-[555px]">
      <input
        type="text"
        placeholder="Enter IP Address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border px-6 py-2 rounded-l-xl h-[58px] w-full"
      />
      <button
        type="submit"
        className="bg-black hover:bg-very-Dark-Gray text-white rounded-r-xl w-full max-w-[58px] h-[58px] flex items-center justify-center"
      >
        <img src={IconArrow} alt="Icon Arrow Submit" />
      </button>
    </form>
  );
}
