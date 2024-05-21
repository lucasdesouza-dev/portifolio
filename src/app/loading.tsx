"use client";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

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
      } fixed right-1/2 top-1/2 z-50 -translate-y-1/2 translate-x-1/2 transform`}>
      <RotatingLines
        width="80"
        //color="#4fa94d"
        visible={true}
        ariaLabel="rotating-lines-loading"
        strokeWidth={"2"}
        animationDuration="0.75"
      />
    </div>
  );
}
