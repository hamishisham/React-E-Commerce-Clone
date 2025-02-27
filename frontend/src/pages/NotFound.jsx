import AuthHeader from "../components/auth/AuthHeader";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
	return (
		<>
			<AuthHeader />
			<div className="flex flex-col mx-auto max-w-[500px] p-7 gap-y-5">
				<p className="mb-5 text-lg md:text-2xl font-IBM">
					<span className="flex gap-x-3 items-center mb-5  text-[#E47911] font-bold">
						<FaQuestionCircle className="hidden md:block"/>
						Are you looking for something?
					</span>
					We apologize. The web page address you entered is not for a page on
					our website
				</p>
				<p className="text-lg font-bold md:text-2xl">
					Go to the Amazon{" "}
					<Link
						to="/"
						className="text-[#004B91] active:text-[#E47911] underline underline-offset-2"
					>
						Home
					</Link>{" "}
					page
				</p>
			</div>
		</>
	);
};

export default NotFound;
