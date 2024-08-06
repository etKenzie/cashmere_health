import SigninButton from "@/components/SignInButton";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <div>
        <SigninButton className="signin-button">Sign In</SigninButton>
      </div>
    </div>
  );
};

export default Home;
