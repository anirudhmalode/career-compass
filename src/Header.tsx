import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
