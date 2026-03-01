function hasCodeChars(s) {
  if (!s) return false;
  return /<|>|<\s*script\b|\bon\w+\s*=/.test(s);
}

function isNameValid() {
  const el = document.getElementById("name");
  const v = ((el && el.value) || "").trim();
  return !!v && !hasCodeChars(v);
}

function isEmailValid() {
  const el = document.getElementById("email");
  const v = ((el && el.value) || "").trim();
  if (hasCodeChars(v)) return false;
  return /^\S+@\S+\.\S+$/.test(v);
}

function isMessageValid() {
  const el = document.getElementById("message");
  const v = ((el && el.value) || "").trim();
  return !!v && !hasCodeChars(v);
}

function isCheckboxValid() {
  const el = document.getElementById("checkbox");
  return !!(el && el.checked);
}

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

function showCheckboxError() {
  const ok = isCheckboxValid();
  const err = document.getElementById("error-checkbox");
  if (err) err.textContent = ok ? "" : "Please accept the privacy policy.";
  return ok;
}

function updateButtonState() {
  const btn = document.getElementById("form-btn");
  if (!btn) return;
  const nameOk = isNameValid();
  const emailOk = isEmailValid();
  const msgOk = isMessageValid();
  const cbOk = isCheckboxValid();
  const valid = nameOk && emailOk && msgOk && cbOk;
  const nameEl = document.getElementById("name");
  if (nameEl) {
    nameEl.classList.toggle("input-valid", nameOk);
    if (nameOk) nameEl.classList.remove("input-error");
  }
  const emailEl = document.getElementById("email");
  if (emailEl) {
    emailEl.classList.toggle("input-valid", emailOk);
    if (emailOk) emailEl.classList.remove("input-error");
  }
  const msgEl = document.getElementById("message");
  if (msgEl) {
    msgEl.classList.toggle("input-valid", msgOk);
    if (msgOk) msgEl.classList.remove("input-error");
  }
  btn.disabled = !valid;
}

function attachFieldListeners() {
  const fields = ["name", "email", "message"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      if (id === "name") showNameError();
      if (id === "email") showEmailError();
      if (id === "message") showMessageError();
      updateButtonState();
    });
    el.addEventListener("focus", () => {
      const err = document.getElementById("error-" + id);
      if (err) err.textContent = "";
    });
    el.addEventListener("input", updateButtonState);
  });
  const cb = document.getElementById("checkbox");
  if (cb) {
    cb.addEventListener("change", () => {
      updateButtonState();
      if (cb.checked) {
        const err = document.getElementById("error-checkbox");
        if (err) err.textContent = "";
      }
    });
    cb.addEventListener("blur", showCheckboxError);
  }
}
