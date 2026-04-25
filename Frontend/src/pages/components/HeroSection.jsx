import React, { useState } from "react";
import { Search, Shield, Zap, ThumbsUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/services?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-blue-50 dark:from-primary/20 dark:via-gray-900 dark:to-gray-800 pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Home services, <br />
            <span className="text-primary">on demand.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
            India's most trusted professionals for all your home needs. Fixed
            transparent pricing. Guaranteed quality.
          </p>

          <form
            onSubmit={handleSearch}
            className="relative max-w-2xl mx-auto mb-16 shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-2 flex items-center"
          >
            <div className="absolute left-4 text-gray-400">
              <Search size={24} />
            </div>
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full pl-12 pr-4 py-4 text-lg bg-transparent focus:outline-none dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-colors h-full"
            >
              Search
            </button>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl">
              <Shield className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Verified Pros
              </h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl">
              <Zap className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Fixed Pricing
              </h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl">
              <ThumbsUp className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Quality Guarantee
              </h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl">
              <Clock className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                On-Demand
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />
    </section>
  );
};

export default HeroSection;
