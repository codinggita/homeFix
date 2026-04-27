import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import Button from "../../components/Button";
// import { providerService } from "../../../api/providerService";
import { setBooking } from "../../store/slice/bookingSlice";
import { showToast } from "../../store/slice/uiSlice";
import { setLocal as setSession } from "../../utils/storage";

const StepSchedule = ({ provider }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentBooking =
    useSelector((state) => state.booking.currentBooking) || {};

  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentBooking.date || "");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(currentBooking.time || "");
  const [description, setDescription] = useState(
    currentBooking.description || "",
  );
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Generate next 7 days
  useEffect(() => {
    const next7Days = [];
    let d = new Date();
    for (let i = 0; i < 7; i++) {
      const dateStr = d.toISOString().split("T")[0];
      const displayStr = d.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
      next7Days.push({ value: dateStr, display: displayStr });
      d.setDate(d.getDate() + 1);
    }
    setDates(next7Days);
    if (!selectedDate) {
      setSelectedDate(next7Days[0].value);
    }
  }, [selectedDate]);

  // Fetch slots for selected date
  useEffect(() => {
    if (!selectedDate || !provider) return;

    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        // Simulate API call to fetch slots
        await new Promise((resolve) => setTimeout(resolve, 500));
        const mockSlots = [
          { time: "09:00 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "01:00 PM", available: true },
          { time: "03:00 PM", available: true },
          { time: "05:00 PM", available: false }
        ];
        setSlots(mockSlots);
        
        // Reset selected slot if it's not in the new slots or it's unavailable
        if (selectedSlot) {
          const slotExists = mockSlots.find((s) => s.time === selectedSlot);
          if (!slotExists || !slotExists.available) {
            setSelectedSlot("");
          }
        }
      } catch (err) {
        console.error(err);
        dispatch(
          showToast({
            type: "error",
            message: "Failed to fetch available slots. Please try again.",
          }),
        );
      } finally {
        setLoadingSlots(false);
      }
    };
    fetchSlots();
  }, [selectedDate, provider, selectedSlot]);

  const handleNext = () => {
    const bookingData = {
      ...currentBooking,
      date: selectedDate,
      time: selectedSlot,
      description,
      // Setting a mock service and price based on provider
      serviceId: provider.priceMenu ? provider.priceMenu[0].id : "1",
      amount: provider.priceMenu ? provider.priceMenu[0].price : 499,
    };

    dispatch(setBooking(bookingData));
    setSession("homefix_booking_progress", {
      currentBooking: bookingData,
      step: 2,
    });
    navigate(`../address`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CalendarIcon className="text-primary" /> Select Date
        </h3>
        <div className="flex overflow-x-auto pb-4 gap-3 snap-x hide-scrollbar">
          {dates.map((d) => {
            const isSelected = selectedDate === d.value;
            return (
              <button
                key={d.value}
                onClick={() => setSelectedDate(d.value)}
                className={`flex-shrink-0 snap-start rounded-xl p-4 min-w-[100px] border-2 transition-all ${
                  isSelected
                    ? "border-primary bg-blue-50 dark:bg-blue-900/20 text-primary"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="text-xs font-semibold uppercase opacity-70 border-b pb-1 mb-1 border-current">
                  {d.display.split(",")[0]}
                </div>
                <div className="text-lg font-bold">
                  {d.display.split(",")[1]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="text-primary" /> Select Time
        </h3>
        {loadingSlots ? (
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-12 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {slots.map((slot) => {
              const isSelected = selectedSlot === slot.time;
              return (
                <button
                  key={slot.time}
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot.time)}
                  className={`py-3 px-4 rounded-lg font-medium border-2 transition-all ${
                    !slot.available
                      ? "bg-gray-100 dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                      : isSelected
                        ? "border-primary bg-primary text-white"
                        : "border-gray-200 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Issue Description</h3>
        <p className="text-sm text-gray-500 mb-3">
          Help the professional understand the problem.
        </p>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="E.g. The AC is making a loud noise and not cooling properly."
          className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 focus:ring-primary focus:border-primary dark:text-white"
        ></textarea>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          className="w-full"
          size="lg"
          disabled={!selectedDate || !selectedSlot}
          onClick={handleNext}
        >
          Next Step: Address
        </Button>
      </div>
    </div>
  );
};

export default StepSchedule;
