import { Link } from "react-router-dom";
import Layout from "../components/auth/Layout";

const Register = () => {
	return (
		<Layout>
      			{/* Registration Form */}
			<form className="form">
				<fieldset className="fieldset">
          {/* Form Title */}
					<legend className="legend">Create Account</legend>
          {/* Name Input */}
					<label htmlFor="name" className="label">
						Your name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="input"
						placeholder="Your name..."
            aria-label="Enter your full name"
					/>
          {/* Mobile Number Input */}
					<label htmlFor="telephone" className="label">
						Mobile numbers
					</label>
					<input
						type="tel"
						id="telephone"
						name="telephone"
						className="input"
						placeholder="Your mobile number..."
            aria-label="Enter your mobile number"
					/>
          {/* Password Input */}
					<label htmlFor="password" className="label">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="input"
					/>
          {/* Submit Button */}
					<button type="submit" className="submit">
						Verify mobile number
					</button>
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
						<Link to="/login" className="px-2 no-underline text-[10px] lg:text-[14px] md:text-[12px] link">
							Sign in <span className="text-[10px]">&#9658;</span>
						</Link>
					</p>
          {/* Terms and Privacy Links */}
					<p className="text-[12px]">
						By creating an account or logging in , you agree to Amazon’s{" "}
						<a href="#" className="link">
							Conditions of Use
						</a>{" "}
						and{" "}
						<a href="#" className="link">
							Privacy Notice.
						</a>
					</p>
			</form>
		</Layout>
	);
};

export default Register;
