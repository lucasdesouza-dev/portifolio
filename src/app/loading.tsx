"use client";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);

    return () => {
      setShowLoader(false);
    };
  }, []);

  return (
    <div
      className={`${
        showLoader ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } fixed right-1/2 top-1/2 z-50 -translate-y-1/2 translate-x-1/2 transform`}
    >
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
