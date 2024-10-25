import { SignUp as SignUpComponent } from "@clerk/clerk-react";


const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUpComponent
        routing="path"
        path="/signup"
        signInUrl="/signin"
        forceRedirectUrl={"/"}
      />
    </div>
  );
};

export default SignUp;
