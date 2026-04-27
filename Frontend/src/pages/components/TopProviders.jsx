import React from "react";
import ProviderCard from "../../components/ProviderCard";
import { PROVIDERS } from "../../utils/constants";

const TopProviders = () => {
  // Take top 4 rated providers
  const topProviders = [...PROVIDERS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Rated Professionals
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Meet our most trusted and highly-rated service experts ready to help
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProviders;
