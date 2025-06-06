import { useEffect, useState } from "react";
import LoginForm3 from "./LoginForm3";
import SignupForm3 from "./SignupForm3";
import "./authForm3.css";

const AuthForm3 = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const togglePassword = (inputId, iconId) => {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(iconId);
      if (!input || !icon) return;

      icon.addEventListener("click", () => {
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        icon.classList.toggle("ri-eye-line", isHidden);
        icon.classList.toggle("ri-eye-off-line", !isHidden);
      });
    };

    togglePassword("input-pass", "input-icon");
    togglePassword("signup-pass", "signup-icon");
  }, [isLogin]);

  return (
    <section className="auth3" id="auth3">
      {isLogin ? (
        <LoginForm3 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm3 switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm3;
