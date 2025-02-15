//email and password REGEX patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

//validate fullName, email, password,confirmPassword using Regex
export const checkFullNameError = (fullName: string) => {
  return fullName.length < 2 ? "Please enter a valid name !" : "";
};
export const checkEmailRegex = (email: string) => {
  if (!emailRegex.test(email)) return "Please enter a valid email !";
  return "";
};
export const checkPasswordRegex = (password: string) => {
  if (!passwordRegex.test(password)) return "Please enter a valid password !";
  return "";
};
export const checkConfirmPasswordError = (
  password: string,
  confirmPassword: string
) => {
  if (!confirmPassword) return "Please confirm your password!";
  if (confirmPassword !== password) return "Passwords do not match !";
  return "";
};
