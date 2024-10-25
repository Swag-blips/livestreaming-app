import React from "react";
import { SignIn as SignInComponent } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignInComponent
        routing="path"
        path="/signin"
        signUpUrl="/signup"
        forceRedirectUrl={"/"}
      />
    </div>
  );
};

export default SignIn;
