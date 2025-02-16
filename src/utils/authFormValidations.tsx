//email and password REGEX patterns
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

//validate fullName, email, password,confirmPassword using Regex
export const validateFullName = (fullName: string) => {
  return fullName.length < 2 ? "Please enter a valid name !" : "";
};
export const validateEmail = (email: string) => {
  if (!EMAIL_PATTERN.test(email)) return "Please enter a valid email !";
  return "";
};
export const validatePassword = (password: string) => {
  if (!PASSWORD_PATTERN.test(password))
    return "Please enter a valid password !";
  return "";
};
export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (!confirmPassword) return "Please confirm your password!";
  if (confirmPassword !== password) return "Passwords do not match !";
  return "";
};
