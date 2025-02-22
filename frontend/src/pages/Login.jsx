import { Link } from "react-router-dom";
import Layout from "../components/auth/Layout";

const Login = () => {
	return (
		<Layout>
      {/* Sign Form */}
			<form className="form">
				<fieldset className="fieldset">
          {/* Form Title */}
					<legend className="legend">Sign in</legend>
          {/* Mobile Number Input */}
					<label htmlFor="email" className="label">
						Email or mobile phone number
					</label>
					<input
						type="text"
						id="email"
						name="email"
						className="input"
						placeholder="Your email or phone number..."
					/>
          {/* Submit Button */}
					<button
						type="submit"
						className="submit"
					>
						Continue
					</button>
          {/* Terms and Privacy Links */}
					<p className="text-[12px]">
						By continuing, you agree to Amazon’s{" "}
						<a href="#" className="link">
							Conditions of Use
						</a>{" "}
						and{" "}
						<a href="#" className="link">
							Privacy Notice.
						</a>
					</p>
          {/* Help Link */}
						<a href="#" className="no-underline link">
            <span className="text-[#656565]">&#9658;</span> Need help?
						</a>
          {/* Divider */}
					<div className="w-full md:max-w-sm h-&#9658;[1px] bg-[#d9d9d9]"></div>
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
					className="w-full h-6 py-1 text-[10px] rounded-md border border-[#717171] text-center"
				>
					Create your Amazon account
				</Link>
			</div>
		</Layout>
	);
};

export default Login;
