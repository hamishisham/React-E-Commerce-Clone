import closedEye from "../../assets/closed-eye.svg";
import openedEye from "../../assets/opened-eye.svg";
import PropTypes from "prop-types";

const EyeImage = ({showPass, setShowPass}) => {
	const toggleEye = () => {
		setShowPass((prev) => !prev);
	};
	return (
		<img
			src={showPass ? openedEye : closedEye}
			alt="closed eye icon"
      className="absolute cursor-pointer right-4 top-9"
			onClick={toggleEye}
		/>
	);
};

export default EyeImage;

EyeImage.propTypes = {
  showPass: PropTypes.bool.isRequired,
  setShowPass: PropTypes.any
}