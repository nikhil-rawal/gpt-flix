const emailRegex = "^[w-.]+@([w-]+.)+[w-]{2,4}";
const passwordRegex = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";

export const checkValidate = (email, password) => {
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
};