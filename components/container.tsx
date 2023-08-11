import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto bg-slate-100 h-[100vh] p-4">
      {children}
    </div>
  );
};

export default Container;
