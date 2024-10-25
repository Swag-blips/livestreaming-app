import React from "react";
import Wrapper from "../../components/Wrapper";
import { SignedIn, UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <Wrapper>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </Wrapper>
  );
};

export default Profile;
