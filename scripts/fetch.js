function showModal(message) {
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal-overlay").classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("modal-open");
}

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

function getFormValues() {
  return {
    name: (document.getElementById("name") || {}).value || "",
    email: (document.getElementById("email") || {}).value || "",
    message: (document.getElementById("message") || {}).value || "",
  };
}

function validateFormValues({ name, email, message }) {
  if (!name.trim() || !email.trim() || !message.trim()) {
    showModal("Bitte alle Felder ausfüllen.");
    return false;
  }
  return true;
}

async function postContactForm({ name, email, message }) {
  return fetch("https://sven-weigel.de/index.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
  });
}

async function handleResponse(res) {
  const data = await res.json().catch(() => null);
  if (res.ok && data && data.success) {
    showModal("Nachricht wurde gesendet.");
    resetForm();
  } else {
    showModal("Deine Nachricht konnte nicht gesendet werden.");
  }
}

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
