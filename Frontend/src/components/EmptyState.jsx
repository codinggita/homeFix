import React from "react";

const EmptyState = ({ icon: Icon, title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-surface dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
      {Icon && (
        <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4 text-gray-500">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 max-w-sm">
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
