import React from "react";

export const Normalbutton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-8 p-5 m-8 border-2 shadow-sm bg-light dark:bg-dark dark:border-bdark lg:flex-row lg:h-40 rounded-2xl border-blight ">
      <button className="p-2 text-sm bg-green-500 hover:bg-green-800">
        Testbutton1
      </button>
      <button className="p-2 text-lg bg-green-500 hover:bg-green-800">
        Testbutton2
      </button>
      <button className="p-2 text-xl bg-green-500 hover:bg-green-800">
        Testbutton3
      </button>
    </div>
  );
};

export const Borderbutton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto gap-8 p-5 m-8 border-2 shadow-sm bg-light dark:bg-dark dark:border-bdark lg:flex-row lg:h-40 rounded-2xl border-blight ">
      <button className="p-2 text-sm bg-green-500 border hover:bg-green-800">
        Testbutton1
      </button>
      <button className="p-2 text-lg bg-green-500 border-2 hover:bg-green-800">
        Testbutton2
      </button>
      <button className="p-2 text-xl bg-green-500 border-b hover:bg-green-800">
        Testbutton3
      </button>
    </div>
  );
};

export const Outlinebutton = () => {
  return (
    <div className="flex flex-col items-center justify-center w-auto h-auto gap-8 p-5 m-8 border-2 shadow-sm bg-light dark:bg-dark dark:border-bdark lg:flex-row lg:h-40 rounded-2xl border-blight ">
      <button className="p-2 text-sm bg-green-500 outline-white hover:bg-green-800">
        Testbutton1
      </button>
      <button className="p-2 text-lg bg-green-500 outline-dashed outline-white hover:bg-green-800">
        Testbutton2
      </button>
      <button className="p-2 text-xl bg-green-500 outline-dotted outline-white hover:bg-green-800">
        Testbutton3
      </button>
    </div>
  );
};
