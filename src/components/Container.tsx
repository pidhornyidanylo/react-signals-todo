import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 bg-slate-600 p-6 rounded-lg">
      {children}
    </div>
  );
};

export default Container;
