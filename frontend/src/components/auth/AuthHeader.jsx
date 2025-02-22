import amazonLogo from "../../assets/amazon-signup.png";

const AuthHeader = () => {
	return (
		<>
			<header className="flex justify-center mt-12 mb-14">
				<img src={amazonLogo} alt="Amazon Logo" className="w-28" />
			</header>
		</>
	);
};
export default AuthHeader;
