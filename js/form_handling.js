function validatePassword() {
  const _passwordInput = document.getElementById("password");
  const _passwordConfirm = document.getElementById("confirm-password");
  const _confirmLabel = document.querySelector("[for=confirm-password]");
  if (
    !(_passwordInput.value.toString() === _passwordConfirm.value.toString())
  ) {
    if (!_confirmLabel.hasAttribute("data-wrong"))
      _confirmLabel.toggleAttribute("data-wrong");

    return false;
  }
  _confirmLabel.toggleAttribute("data-wrong");
  _passwordInput.value = "";
  _passwordConfirm.value = "";
  return true;
}
