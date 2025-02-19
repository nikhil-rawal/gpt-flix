function resetForm() {
  setFullName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  setAllErrors({
    fullNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
}

export default resetForm;
