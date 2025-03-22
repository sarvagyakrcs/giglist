import React from "react";

type Props = {
  children: React.ReactNode;
};

const OnboardingLayout = ({ children }: Props) => {
    
  return <div className="h-screen w-screen flex items-center justify-center">
    { children }
  </div>;
};

export default OnboardingLayout;
