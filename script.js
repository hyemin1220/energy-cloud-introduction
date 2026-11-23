const form = document.getElementById("guestbook-form");
const list = document.getElementById("guestbook-list");
const STORAGE_KEY = "energy-cloud-guestbook";

function loadEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}

function renderEntries() {
  const entries = loadEntries();
  list.innerHTML = "";
  entries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "guest-entry";
    const name = document.createElement("strong");
    name.textContent = entry.name;
    const message = document.createElement("p");
    message.textContent = entry.message;
    article.append(name, message);
    list.append(article);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  const message = document.getElementById("guest-message").value.trim();
  if (!name || !message) return;
  const entries = loadEntries();
  entries.unshift({ name, message });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  form.reset();
  renderEntries();
});

renderEntries();
