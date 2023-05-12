import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-32 h-32 border-t-8 border-b-8 border-green-500 rounded-full animate-spin"></div>
    </div>
  );
}
