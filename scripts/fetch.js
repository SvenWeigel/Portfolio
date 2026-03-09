function showModal(message) {
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal-overlay").classList.add("modal-open");
}

/**
 * Display a modal with a message.
 * @param {string} message - Message to show inside the modal.
 * @returns {void}
 */

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("modal-open");
}

/**
 * Close the modal overlay.
 * @returns {void}
 */

function resetForm() {
  const form = document.getElementById("contact-form");
  if (form) form.reset();
  ["name", "email", "message"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("input-valid", "input-error");
    const err = document.getElementById("error-" + id);
    if (err) err.textContent = "";
  });
  const errCb = document.getElementById("error-checkbox");
  if (errCb) errCb.textContent = "";
  updateButtonState();
}

/**
 * Reset the contact form fields, clear errors and update button state.
 * @returns {void}
 */

function getFormValues() {
  return {
    name: (document.getElementById("name") || {}).value || "",
    email: (document.getElementById("email") || {}).value || "",
    message: (document.getElementById("message") || {}).value || "",
  };
}

/**
 * Read and return current form values.
 * @returns {{name:string,email:string,message:string}} Object with form field values.
 */

function validateFormValues({ name, email, message }) {
  if (!name.trim() || !email.trim() || !message.trim()) {
    showModal("Bitte alle Felder ausfüllen.");
    return false;
  }
  return true;
}

/**
 * Validate basic presence of required form fields.
 * @param {{name:string,email:string,message:string}} values - Form values to validate.
 * @returns {boolean} True if validation passed.
 */

async function postContactForm({ name, email, message }) {
  return fetch("https://sven-weigel.de/index.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
  });
}

/**
 * Post contact form values to the server endpoint.
 * @param {{name:string,email:string,message:string}} param0 - Form values to post.
 * @returns {Promise<Response>} Fetch response promise.
 */

async function handleResponse(res) {
  const data = await res.json().catch(() => null);
  if (res.ok && data && data.success) {
    showModal("Nachricht wurde gesendet.");
    resetForm();
  } else {
    showModal("Deine Nachricht konnte nicht gesendet werden.");
  }
}

/**
 * Interpret the server response and show success/failure modal.
 * @param {Response} res - Fetch response object.
 * @returns {Promise<void>} Resolves after handling.
 */

async function sendContactForm() {
  const btn = document.querySelector("#contact-right-div button.general-btn");
  try {
    if (btn) btn.disabled = true;
    const values = getFormValues();
    if (!validateFormValues(values)) return;
    const res = await postContactForm(values);
    await handleResponse(res);
  } catch (err) {
    showModal("Deine Nachricht konnte nicht gesendet werden.");
  } finally {
    if (btn) btn.disabled = false;
  }
}

/**
 * Gather form values, validate and send the contact form to the server.
 * Disables the submit button while the request is in progress.
 * @returns {Promise<void>} Resolves when the operation completes.
 */
