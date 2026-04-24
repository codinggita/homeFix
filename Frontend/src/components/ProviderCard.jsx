import React from "react";
import { ShieldCheck, MapPin, Briefcase } from "lucide-react";
import Card from "../../ui/Card/Card";
import StarRating from "../StarRating/StarRating";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const ProviderCard = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 overflow-hidden flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
          {provider.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
              {provider.name}
            </h3>
            {provider.isVerified && (
              <ShieldCheck className="text-green-500 w-5 h-5 flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
            <Briefcase size={14} />
            <span className="truncate">{provider.trade}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            <MapPin size={14} />
            <span className="truncate">{provider.city}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900 dark:text-white">
            {provider.rating}
          </span>
          <StarRating rating={provider.rating} size={14} />
          <span className="text-xs text-gray-500">({provider.reviews})</span>
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          {provider.experience}y exp
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate(`/provider/${provider.id}`)}
        >
          View Profile & Book
        </Button>
      </div>
    </Card>
  );
};

export default ProviderCard;
