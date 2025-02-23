import { useState } from "react";

const useInput = (initVal, validate) => {
  
  const [value, setValue] = useState(initVal);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const validateError = validate(inputValue)
    setError(validateError);
  };

  return {value, error, handleChange, setError}
}
export default useInput;