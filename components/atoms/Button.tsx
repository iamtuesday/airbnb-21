import { IconType } from "react-icons";

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  size?: number
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  size
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:bg-[#f7f7f7]
      transition
      ${outline ? "bg-white" : "bg-rose-500"}
      ${outline ? "border-black" : "border-rose-500"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-3"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "px-2" : "px-4"}
      ${small ? "border-[.1rem]" : "border-[.2rem]"}
 `}
    >
      {Icon && <Icon size={size} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};
