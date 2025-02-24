import './auth.css';
import PropTypes from "prop-types";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";

const Layout = ({ children }) => {
	return (
		<>
			<AuthHeader />
			<main className="flex flex-col items-center justify-center pb-5">
				{children}
			</main>
			<AuthFooter />
		</>
	);
};
export default Layout;
Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
