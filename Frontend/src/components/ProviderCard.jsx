import React from "react";
import { ShieldCheck, MapPin, Briefcase } from "lucide-react";
import Card from "./Card";
import StarRating from "./StarRating";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ProviderCard = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <Card hover className="flex flex-col h-full p-5">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-[52px] h-[52px] rounded-full bg-blue-100 overflow-hidden flex items-center justify-center text-xl font-bold text-blue-600 flex-shrink-0">
          {provider.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {provider.name}
            </h3>
            {provider.isVerified && (
              <ShieldCheck className="text-green-500 w-[18px] h-[18px] flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
            <Briefcase size={14} className="text-gray-400" />
            <span className="truncate">{provider.trade}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={14} className="text-gray-400" />
            <span className="truncate">{provider.city}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-5 mt-auto">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[15px] text-gray-900">
            {provider.rating}
          </span>
          <StarRating rating={provider.rating} size={14} />
          <span className="text-xs text-gray-400">({provider.reviews})</span>
        </div>
        <div className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
          {provider.experience}y exp
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full rounded-xl py-2.5 text-[13px] font-medium border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={() => navigate(`/provider/${provider.id}`)}
      >
        View Profile & Book
      </Button>
    </Card>
  );
};

export default ProviderCard;
