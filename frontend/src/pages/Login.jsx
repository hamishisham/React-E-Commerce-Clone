import { Link } from "react-router-dom";
import Layout from "../components/auth/Layout";
import useInput from "../hooks/useInput";
import ErrorMsg from "../components/auth/ErrorMsg";
import EyeImage from "../components/auth/EyeImage";
import { useState } from "react";

const Login = () => {
	const [showPass, setShowPass] = useState(false);

	// Regular expression for validating email format
	const MAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	// Validation functions
	const validateEmail = (val) =>
		val && !val.match(MAIL_REGEX) ? "Invalid Email" : "";
	const validatePassword = (val) =>
		val && val.length < 6 ? "Must be at least 6 characters" : "";

	// Input hooks
	const email = useInput("", validateEmail);
	const password = useInput("", validatePassword);

	const formSubmit = (e) => {
		e.preventDefault();
		// Prevent submission if there are validation errors
		if (!email.value) email.setError("This field is required");
		if (!password.value) password.setError("This field is required");
		if (email.error || password.error) return;
	};
	return (
		<Layout>
			{/* Sign Form */}
			<form className="form">
				<fieldset className="fieldset">
					{/* Form Title */}
					<legend className="legend">Sign in</legend>
					{/* Email Input */}
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
							autoComplete="on"
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
							type="password"
							id="password"
							name="password"
							className={`input ${
								password.error && "!shadow-[0_0_2px_2px_rgb(230,70,70)]"
							}`}
							placeholder=""
							onChange={password.handleChange}
						/>
						<EyeImage showPass={showPass} setShowPass={setShowPass} />
						<ErrorMsg message={password.error} />
					</div>

					{/* Submit Button */}
					<button type="submit" className="submit" onClick={formSubmit}>
						continue
					</button>
					{/* Terms and Privacy Links */}
					<p className="text-[10px] md:text-[12px]">
						By continuing, you agree to Amazon’s{" "}
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
					{/* Help Link */}
					<a
						href="https://www.amazon.eg/gp/help/customer/display.html?nodeId=508510"
						className="no-underline link"
					>
						<span
							className="text-[#656565]"
							target="_blank"
							rel="noopener noreferrer"
						>
							&#9658;
						</span>{" "}
						Need help?
					</a>
					{/* Divider */}
					<div className="w-full md:max-w-sm h-[1px] bg-[#d9d9d9]"></div>
					<div className="text-base">
						<p className="font-semibold">Buying for work?</p>
						<a href="#" className="no-underline link">
							Shop on Amazon Business
						</a>
					</div>
				</fieldset>
			</form>
			{/* Registration Link */}
			<div className="flex flex-col items-center justify-center w-2/3 mt-4 md:max-w-sm lg:max-w-sm gap-y-2 font-IBM">
				<p className="w-full flex justify-center items-center text-[10px] text-[#717171] before:block before:content-[''] before:w-full before:h-[1px] before:bg-[#d9d9d9] after:block after:content-[''] after:w-full after:h-[1px] after:bg-[#d9d9d9] whitespace-nowrap gap-2">
					New to Amazon?
				</p>
				<Link
					to="/register"
					className="w-full h-6 py-1 text-[10px] md:text-[15px] md:p-0 rounded-md border border-[#717171] text-center"
				>
					Create your Amazon account
				</Link>
			</div>
		</Layout>
	);
};

export default Login;
