import React, { useContext } from "react";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";
import { FaEnvelope, FaKey, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import LoginContextType from "../../user/models/LoginContextType";
import UserService from "../../user/service/UserService";
import { LoginContext } from "../../context/LoginProvider";
import UserLogin from "../../user/dto/UserLogin";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { setUserCookie } = useContext(LoginContext) as LoginContextType;
  const { register, handleSubmit } = useForm<FormData>();
  let userService = new UserService();
  let nav = useNavigate();

  let onSubmit = async (data: FormData) => {
    try {
      let user = await userService.login(data);
      setUserCookie(user as UserLogin);
      toast.success(`Login successful! Welcome back, ${user.username}!`);

      handleNavHome();
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  let handleNavHome = () => {
    nav("/dashboard");
  };

  const handleSignUp = () => {
    nav("/register");
  };

  const handleRetrivePassword = () => {
    nav("/retrievePassword");
  };

  return (
    <div id="login">
      <div className="login__container">
        <div className="login__header">
          <LogoSvg className="login__logo" />

          <h1 className="heading-primary">Welcome back to PathPilot!</h1>
          <h4 className="heading-secondary">
            Reengage with precision pathfinding: Your gateway to streamlined
            route optimization and smarter travel decisions.
          </h4>
        </div>

        <form className="login__center" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputBox">
            <FaEnvelope className="inputBox__icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, minLength: 3 })}
            />
          </div>
          <div className="inputBox">
            <FaKey className="inputBox__icon" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 3 })}
            />
          </div>

          <div className="login__center__checker">
            <div className="login__center__forgot">
              <p onClick={() => handleRetrivePassword()}>Forgot Password?</p>
            </div>
          </div>
          <div className="login__center__button">
            <button className="button button__first" type="submit">
              Login
            </button>
          </div>
        </form>

        <div className="login__bottom">
          <div className="login__bottom__signup">
            <p className="heading-bottom">Don't have an account?</p>
            <span onClick={() => handleSignUp()}>Sign Up</span>
          </div>

          <div className="login__bottom__socialMedia">
            <p>Or sign in with social media</p>
            <div className="button__box">
              <button className="button__socialMedia">
                <FaEnvelope />
              </button>

              <button className="button__socialMedia">
                <FaFacebookF />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
