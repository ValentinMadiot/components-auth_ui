import { useEffect, useState } from "react";
import LoginForm from "./LoginForm1";
import SignupForm from "./SignupForm1";
import "./authForm1.css";

const AuthForm1 = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Show/hide password logic
  useEffect(() => {
    const toggleEye = (passId, eyeId) => {
      const input = document.getElementById(passId);
      const iconEye = document.getElementById(eyeId);

      if (!input || !iconEye) return;

      iconEye.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        iconEye.classList.toggle("ri-eye-line", isPassword);
        iconEye.classList.toggle("ri-eye-off-line", !isPassword);
      });
    };

    toggleEye("login-pass", "login-eye");
    toggleEye("signup-pass", "signup-eye");
  }, [isLogin]);

  return (
    <section className="auth1" id="auth1">
      {isLogin ? (
        <LoginForm switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm1;
