import { Link } from "react-router-dom";
import Layout from "../components/auth/Layout";
import useInput from "../hooks/useInput";
import ErrorMsg from "../components/auth/ErrorMsg";
import EyeImage from "../components/auth/EyeImage";
import { NAME_REGEX, MAIL_REGEX, PASS_REGEX } from "../utils/regex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";

const Register = () => {
  //Component logic . . .
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Validation functions
  const validateName = (val) =>
    val && !val.match(NAME_REGEX) ? "Invalid Name" : "";
  const validateEmail = (val) =>
    val && !val.match(MAIL_REGEX) ? "Invalid Email" : "";
  const validatePassword = (val) =>
    val && (!val.match(PASS_REGEX) || val.length < 6)
      ? "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
      : "";
  const validateConfirmPassword = (val) =>
    val && val !== password.value ? "Passwords do not match" : "";

  // Input hooks
  const name = useInput("", validateName);
  const email = useInput("", validateEmail);
  const password = useInput("", validatePassword);
  const confirmPassword = useInput("", validateConfirmPassword);

  const formSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if there are validation errors
    if (!name.value) name.setError("This field is required");
    if (!email.value) email.setError("This field is required");
    if (!password.value) password.setError("This field is required");
    if (!confirmPassword.value)
      confirmPassword.setError("This field is required");

    if (name.error || email.error || password.error || confirmPassword.error) {
      return;
    }

    dispatch(
      registerUser({
        name: name.value.trim(),
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  return (
    <Layout>
      {/* Registration Form */}
      <form className="form">
        <fieldset className="fieldset">
          {/* Form Title */}
          <legend className="legend">Create Account</legend>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="label">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`input ${
                name.error && "!shadow-[0_0_2px_2px_rgb(230,70,70)]"
              }`}
              placeholder="e.g. John doe"
              aria-label="Enter your full name"
              autoComplete="on"
              value={name.value}
              onChange={name.handleChange}
            />
            <ErrorMsg message={name.error} />
          </div>
          {/* Mobile Number Input */}
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input ${
                email.error && "!shadow-[0_0_2px_2px_rgb(230,70,70)]"
              }`}
              placeholder="e.g. Example@gmail.com"
              aria-label="Enter your email"
              autoComplete="on"
              value={email.value}
              onChange={email.handleChange}
            />
            <ErrorMsg message={email.error} />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              className={`input ${
                password.error && "!shadow-[0_0_2px_2px_rgb(230,70,70)]"
              }`}
              value={password.value}
              onChange={password.handleChange}
            />
            <EyeImage showPass={showPass} setShowPass={setShowPass} />
            <ErrorMsg message={password.error} />
          </div>

          {/* Password Confirm Input */}
          <div className="relative">
            <label htmlFor="confirm-password" className="label">
              Confirm Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              className={`input ${
                confirmPassword.error && "!shadow-[0_0_2px_2px_rgb(230,70,70)]"
              }`}
              value={confirmPassword.value}
              onChange={confirmPassword.handleChange}
            />
            {/* Show Error Message if Registration Fails */}
            <ErrorMsg message={confirmPassword.error} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit"
            onClick={formSubmit}
            disabled={loading}
          >
            {loading ? "Registering..." : "Submit"}
          </button>
          {/**Show error if registration fails */}
          {error && <ErrorMsg message={error} />}
        </fieldset>
        {/* Divider */}
        <div className="w-full md:max-w-sm h-[1px] bg-[#d9d9d9]"></div>
        {/* Business Account Link */}
        <div className="my-4 text-base">
          <p className="font-semibold">Buying for work?</p>
          <a href="#" className="no-underline link">
            Create a free business account
          </a>
        </div>
        {/* Divider */}
        <div className="w-full md:max-w-sm h-[1px] bg-[#d9d9d9] mb-4"></div>
        {/* Login Link */}
        <p className="text-[10px] whitespace-nowrap text-black lg:text-[14px] md:text-[12px] mb-4">
          Already have an account?
          <Link
            to="/login"
            className="px-2 no-underline text-[10px] lg:text-[14px] md:text-[12px] link"
          >
            Sign in <span className="text-[10px]">&#9658;</span>
          </Link>
        </p>
        {/* Terms and Privacy Links */}
        <p className="text-[10px] md:text-[12px]">
          By creating an account or logging in , you agree to Amazon’s{" "}
          <a
            href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=201909000"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conditions of Use
          </a>{" "}
          and{" "}
          <a
            href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=201909010"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Notice.
          </a>
        </p>
      </form>
    </Layout>
  );
};

export default Register;
