	// Regular expression for validating name (only letters allowed)
	export const NAME_REGEX = /^[A-Za-z\s]+$/;
	// Regular expression for validating email format
	export const MAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	export const PASS_REGEX =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

