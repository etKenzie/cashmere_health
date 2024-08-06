"use client";

import { handleSignOut } from "@/lib/auth/signOutServerAction";

export const SignOutButton = (props: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleSignOut();
      }}
    >
      {props.children || "Sign Out"}
    </button>
  );
};

export default SignOutButton;
