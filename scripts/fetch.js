function getFormValues() {
  return {
    name: (document.getElementById("name") || {}).value || "",
    email: (document.getElementById("email") || {}).value || "",
    message: (document.getElementById("message") || {}).value || "",
  };
}

function validateFormValues({ name, email, message }) {
  if (!name.trim() || !email.trim() || !message.trim()) {
    alert("Bitte alle Felder ausfüllen.");
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
    alert("Nachricht gesendet (Test).");
    const form = document.getElementById("contact-form");
    if (form) form.reset();
  } else {
    alert("Senden fehlgeschlagen: " + ((data && data.error) || res.statusText));
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
    alert("Fehler beim Senden: " + err.message);
  } finally {
    if (btn) btn.disabled = false;
  }
}
