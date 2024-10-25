import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <div>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default PrivateRoute;
