import IconCheck from "../assets/images/icon-success-check.svg";

interface CustomToastProps {
  title: string;
  message: string;
}

export const CustomToastSuccess = ({ title, message }: CustomToastProps) => {
  return (
    <div className="bg-customGreen-900 text-white p-6 rounded-xl flex flex-col gap-2 max-w-max">
      <h3 className="flex gap-2 text-lg font-bold items-center">
        <img src={IconCheck} alt="Success" />
        {title}
      </h3>
      <p className="text-white/80">{message}</p>
    </div>
  );
};
