import React from "react";
import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";
import { formatCurrency, formatDate } from "../../../utils/formatters";
import { Calendar, Clock, User } from "lucide-react";
import { SERVICES, PROVIDERS } from "../../../utils/constants";

const BookingCard = ({ booking, onClick }) => {
  const service = SERVICES.find((s) => s.id === booking.serviceId) || {};
  const provider = PROVIDERS.find((p) => p.id === booking.providerId) || {};

  const statusColors = {
    Upcoming: "info",
    Confirmed: "success",
    Done: "gray",
    Cancelled: "danger",
  };

  return (
    <Card hover onClick={onClick} className="w-full relative">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
            <User size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {service.name || "Service"}
            </h4>
            <p className="text-sm text-gray-500">
              {provider.name || "Provider"}
            </p>
          </div>
        </div>
        <Badge variant={statusColors[booking.status] || "gray"}>
          {booking.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Calendar size={16} />
          <span>{formatDate(booking.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Clock size={16} />
          <span>{booking.time}</span>
        </div>
        <div className="col-span-2 font-semibold text-gray-900 dark:text-white mt-1">
          {formatCurrency(booking.amount)}
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
