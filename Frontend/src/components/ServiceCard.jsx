import React from "react";
import Card from "../../ui/Card/Card";
import * as Icons from "lucide-react";

const ServiceCard = ({ service, onClick }) => {
  const IconComponent = Icons[service.icon] || Icons.Wrench;

  return (
    <Card
      hover
      padding="p-6"
      onClick={onClick}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center mb-4">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {service.category}
      </p>
      <div className="mt-auto">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Starts at
        </span>
        <div className="font-bold text-gray-900 dark:text-white">
          ₹{service.startingPrice}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
