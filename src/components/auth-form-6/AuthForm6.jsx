import { useState } from "react";
import LoginForm6 from "./LoginForm6";
import SignupForm6 from "./SignupForm6";
import SvgMaskedImage from "./SvgMaskedImage";
import "./authForm6.css";

const AuthForm6 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth6__bg" id="auth6">
      <SvgMaskedImage />
      <div className="auth6">
        {isLogin ? (
          <LoginForm6 switchForm={() => setIsLogin(false)} />
        ) : (
          <SignupForm6 switchForm={() => setIsLogin(true)} />
        )}
      </div>
    </section>
  );
};

export default AuthForm6;
