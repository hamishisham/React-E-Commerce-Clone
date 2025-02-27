import PropTypes from "prop-types";

const ErrorMsg = ({ message }) => {
	return (
		<span
			className="error"
			style={{ color: `${message && "rgb(230, 70, 70)"}` }}
		>
			{" "}
			{message}
		</span>
	);
};
export default ErrorMsg
ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
};