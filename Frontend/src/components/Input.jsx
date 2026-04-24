import React from "react";

const Input = React.forwardRef(
  (
    { label, error, leftIcon, rightIcon, className = "", id, ...props },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={`block w-full rounded-lg border focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-colors
            ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}
            ${leftIcon ? "pl-10" : "pl-4"}
            ${rightIcon ? "pr-10" : "pr-4"}
            ${className}
            h-11`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
