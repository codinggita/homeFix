import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageWrapper = ({
  children,
  title,
  description,
  hideNavbar,
  hideFooter,
  className = "",
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 transition-colors duration-200">
      <Helmet>
        <title>
          {title
            ? `${title} | HomeFix`
            : "HomeFix — Trusted Home Services at Fixed Prices"}
        </title>
        {description && <meta name="description" content={description} />}
      </Helmet>

      {!hideNavbar && <Navbar />}

      <main className={`flex-1 ${className}`}>{children}</main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageWrapper;
