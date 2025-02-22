import {Link} from 'react-router-dom';
import chevron from "../assets/polygon-chevron.png";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";

const Login = () => {
	return (
		<>
			{" "}
			<AuthHeader />
			<main className="flex flex-col items-center justify-center pb-5">
				<form className="w-2/3 md:max-w-sm lg:max-w-sm border border-[#d9d9d9] rounded-md py-8 px-5 flex justify-center font-IBM">
					<fieldset className="flex flex-col gap-4">
						<legend className="text-2xl font-medium contents">Sign in</legend>
						<label htmlFor="email" className="text-sm font-medium">
							Email or mobile phone number
						</label>
						<input
							type="text"
							id="email"
							name="email"
							className="h-9 border border-[#888C8C] rounded-[5px] pl-2 py-1 placeholder:text-[12px] "
							placeholder="Your email or phone number..."
						/>
						<button
							type="submit"
							className="text-sm bg-[#FFD814] rounded-[5px] py-1 px-4"
						>
							Continue
						</button>
						<p className="text-[12px]">
							By continuing, you agree to Amazon’s{" "}
							<a href="#" className="text-[#2A8FD7] underline font-inika">
								Conditions of Use
							</a>{" "}
							and{" "}
							<a href="#" className="text-[#2A8FD7] underline font-inika">
								Privacy Notice.
							</a>
						</p>
						<div className="flex items-center gap-2 text-[12px]">
							<img
								src={chevron}
								alt="chevron right"
								className="w-[8px]"
								aria-hidden="true"
							/>
							<a href="#" className="text-[#2A8FD7] underline font-inika">
								Need help?
							</a>
						</div>
						<div className="w-full md:max-w-sm h-[1px] bg-[#d9d9d9]"></div>
						<div className="text-base">
							<p className="font-semibold">Buying for work?</p>
							<a href="#" className="text-[12px] text-[#2A8FD7] font-inika">
								Shop on Amazon Business
							</a>
						</div>
					</fieldset>
				</form>
				<div className="flex flex-col items-center justify-center w-2/3 mt-4 md:max-w-sm lg:max-w-sm gap-y-2 font-IBM">
					<p className="w-full flex justify-center items-center text-[10px] text-[#717171] before:block before:content-[''] before:w-full before:h-[1px] before:bg-[#d9d9d9] after:block after:content-[''] after:w-full after:h-[1px] after:bg-[#d9d9d9] whitespace-nowrap gap-2">
						New to Amazon?
					</p>
					<Link to='/register' className="w-full h-6 py-1 text-[10px] rounded-md border border-[#717171] text-center">
						Create your Amazon account
					</Link>
				</div>
			</main>
			<AuthFooter />
		</>
	);
};

export default Login;
