/**
 * Check whether a string contains HTML/script-like characters or event attributes.
 * @param {string} s - The string to inspect.
 * @returns {boolean} True if the string contains suspicious characters.
 */
function hasCodeChars(s) {
  if (!s) return false;
  return /<|>|<\s*script\b|\bon\w+\s*=/.test(s);
}

/**
 * Validate the name field value.
 * @returns {boolean} True when the name field exists, is non-empty and contains no code.
 */
function isNameValid() {
  const el = document.getElementById("name");
  const v = ((el && el.value) || "").trim();
  return !!v && !hasCodeChars(v);
}

/**
 * Validate the email field value with a simple regex and ensure no code characters.
 * @returns {boolean} True when the email looks valid.
 */
function isEmailValid() {
  const el = document.getElementById("email");
  const v = ((el && el.value) || "").trim();
  if (hasCodeChars(v)) return false;
  return /^\S+@\S+\.\S+$/.test(v);
}

/**
 * Validate the message field value.
 * @returns {boolean} True when the message is non-empty and contains no code.
 */
function isMessageValid() {
  const el = document.getElementById("message");
  const v = ((el && el.value) || "").trim();
  return !!v && !hasCodeChars(v);
}

/**
 * Check whether the privacy checkbox is checked.
 * @returns {boolean} True if the checkbox element exists and is checked.
 */
function isCheckboxValid() {
  const el = document.getElementById("checkbox");
  return !!(el && el.checked);
}

/**
 * Show or clear the name field error message and apply input classes.
 * @returns {boolean} True if the name is valid.
 */
function showNameError() {
  const el = document.getElementById("name");
  const v = ((el && el.value) || "").trim();
  const ok = isNameValid();
  const err = document.getElementById("error-name");
  if (err)
    err.textContent = ok
      ? ""
      : hasCodeChars(v)
        ? "Code not allowed."
        : "Please enter your name.";
  if (el) {
    el.classList.toggle("input-error", !ok);
    el.classList.toggle("input-valid", ok);
  }
  return ok;
}

/**
 * Show or clear the email field error message and apply input classes.
 * @returns {boolean} True if the email is valid.
 */
function showEmailError() {
  const el = document.getElementById("email");
  const v = ((el && el.value) || "").trim();
  const ok = isEmailValid();
  const err = document.getElementById("error-email");
  if (err)
    err.textContent = ok
      ? ""
      : hasCodeChars(v)
        ? "Code not allowed."
        : "Please enter a valid email.";
  if (el) {
    el.classList.toggle("input-error", !ok);
    el.classList.toggle("input-valid", ok);
  }
  return ok;
}

/**
 * Show or clear the message field error message and apply input classes.
 * @returns {boolean} True if the message is valid.
 */
function showMessageError() {
  const el = document.getElementById("message");
  const v = ((el && el.value) || "").trim();
  const ok = isMessageValid();
  const err = document.getElementById("error-message");
  if (err)
    err.textContent = ok
      ? ""
      : hasCodeChars(v)
        ? "Code not allowed."
        : "Please enter a message.";
  if (el) {
    el.classList.toggle("input-error", !ok);
    el.classList.toggle("input-valid", ok);
  }
  return ok;
}

/**
 * Show or clear the checkbox error message.
 * @returns {boolean} True if the checkbox is checked.
 */
function showCheckboxError() {
  const ok = isCheckboxValid();
  const err = document.getElementById("error-checkbox");
  if (err) err.textContent = ok ? "" : "Please accept the privacy policy.";
  return ok;
}

/**
 * Update input classes for a given field id based on validity.
 * @param {string} id - Element id of the field.
 * @param {boolean} ok - Whether the field is valid.
 * @returns {void}
 */
function updateFieldState(id, ok) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle("input-valid", ok);
  if (ok) el.classList.remove("input-error");
}

/**
 * Enable or disable the send button depending on all field validity.
 * @returns {void}
 */
function updateButtonState() {
  const btn = document.getElementById("contact-send-btn");
  if (!btn) return;
  const nameOk = isNameValid();
  const emailOk = isEmailValid();
  const msgOk = isMessageValid();
  const cbOk = isCheckboxValid();
  const valid = nameOk && emailOk && msgOk && cbOk;
  updateFieldState("name", nameOk);
  updateFieldState("email", emailOk);
  updateFieldState("message", msgOk);
  btn.disabled = !valid;
}

/**
 * Handle blur event for a field by showing the proper error and updating button state.
 * @param {string} id - Field element id.
 * @returns {void}
 */
function handleFieldBlur(id) {
  if (id === "name") showNameError();
  if (id === "email") showEmailError();
  if (id === "message") showMessageError();
  updateButtonState();
}

/**
 * Handle focus event for a field by clearing its error message.
 * @param {string} id - Field element id.
 * @returns {void}
 */
function handleFieldFocus(id) {
  const err = document.getElementById("error-" + id);
  if (err) err.textContent = "";
}

/**
 * Handle checkbox change: update button state and clear checkbox error when checked.
 * @param {HTMLInputElement} cb - The checkbox input element.
 * @returns {void}
 */
function handleCheckboxChange(cb) {
  updateButtonState();
  if (cb.checked) {
    const err = document.getElementById("error-checkbox");
    if (err) err.textContent = "";
  }
}

/**
 * Attach listeners to name, email, message fields and the privacy checkbox.
 * @returns {void}
 */
function attachFieldListeners() {
  const fields = ["name", "email", "message"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => handleFieldBlur(id));
    el.addEventListener("focus", () => handleFieldFocus(id));
    el.addEventListener("input", updateButtonState);
  });
  const cb = document.getElementById("checkbox");
  if (cb) {
    cb.addEventListener("change", () => handleCheckboxChange(cb));
    cb.addEventListener("blur", showCheckboxError);
  }
}
