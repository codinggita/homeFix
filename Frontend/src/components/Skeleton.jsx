import React from "react";

const Skeleton = ({ className = "", variant = "text" }) => {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";

  const variants = {
    text: "rounded",
    card: "rounded-xl",
    avatar: "rounded-full",
  };

  return <div className={`${baseClasses} ${variants[variant]} ${className}`} />;
};

export default Skeleton;
