import { useState } from "react";
import LoginForm2 from "./LoginForm2";
import SignupForm2 from "./SignupForm2";
import "./authForm2.css";

const AuthForm2 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth1 login">
      {isLogin ? (
        <LoginForm2 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm2 switchForm={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default AuthForm2;
