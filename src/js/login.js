export const PageLogin = () => {
  const usernameInput = document.querySelector("#username");
  const submitButton = document.querySelector("button[type='submit']");

  if (!usernameInput || !submitButton) return;

  const toggleButtonState = () => {
    const isValid = usernameInput.value.trim().length >= 3;
    submitButton.disabled = !isValid;
  };

  usernameInput.addEventListener("input", toggleButtonState);
};
