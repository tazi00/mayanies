import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      {children}
    </div>
  );
}

export default AuthLayout;
