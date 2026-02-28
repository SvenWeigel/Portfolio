async function sendContactForm() {
  const btn = document.querySelector("#contact-right-div button.general-btn");
  try {
    if (btn) btn.disabled = true;

    const name = (document.getElementById("name") || {}).value || "";
    const email = (document.getElementById("email") || {}).value || "";
    const message = (document.getElementById("message") || {}).value || "";

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Bitte alle Felder ausfüllen.");
      return;
    }

    const res = await fetch("https://sven-weigel.de/index.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data && data.success) {
      alert("Nachricht gesendet (Test).");
      const form = document.getElementById("contact-form");
      if (form) form.reset();
    } else {
      alert(
        "Senden fehlgeschlagen: " + ((data && data.error) || res.statusText),
      );
    }
  } catch (err) {
    alert("Fehler beim Senden: " + err.message);
  } finally {
    if (btn) btn.disabled = false;
  }
}