"use client";

import { useRouter } from "next/navigation";

export const SigninButton = (props: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/auth/sign-in");
      }}
    >
      {props.children || "Sign In"}
    </button>
  );
};

export default SigninButton;
