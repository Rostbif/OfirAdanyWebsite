import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "Success" | "Error";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  // TODO
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const toastStyles =
    type === "Success"
      ? "fixed top-8 right-4 z-50 p-4 rounded-md bg-green-500 text-white max-w-md"
      : "fixed top-8 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md";
  return (
    <div className={toastStyles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
