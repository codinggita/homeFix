import React from "react";

const Card = ({
  children,
  className = "",
  padding = "p-4",
  shadow = "shadow-sm",
  hover = false,
  onClick,
}) => {
  const baseClasses =
    "bg-surface dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden text-gray-900 dark:text-white transition-all duration-200";
  const hoverClasses = hover
    ? "hover:shadow-md hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      className={`${baseClasses} ${padding} ${shadow} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
