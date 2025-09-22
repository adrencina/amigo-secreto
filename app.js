let amigos = [];

function normalizeName(raw) {
  return raw.trim().replace(/\s+/g, ' ');
}

function capitalizeName(name) {
  return name
    .split(' ')
    .map(word => {
      const lower = word.toLowerCase();
      const first = lower.charAt(0).toUpperCase();
      return first + lower.slice(1);
    })
    .join(' ');
}

function normalizeForComparison(name) {
  return name.normalize('NFC').toLowerCase();
}

function isValidName(name) {
  try {
    const unicodeLetters = /^[\p{L}\s]+$/u;
    return unicodeLetters.test(name);
  } catch (e) {
    const latinLetters = /^[A-Za-zÀ-ÖØ-öø-ÿÑñÁÉÍÓÚáéíóúüÜ\s]+$/;
    return latinLetters.test(name);
  }
}

function isTooShort(name) {
  const onlyLetters = name.replace(/\s+/g, '');
  return onlyLetters.length <= 1;
}

function isDuplicate(name, list) {
  const key = normalizeForComparison(name);
  return list.some(item => normalizeForComparison(item) === key);
}

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const raw = input.value;
  const nombre = normalizeName(raw);

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  if (!isValidName(nombre)) {
    alert('Por favor, ingrese solo letras y espacios. No se permiten números ni caracteres especiales.');
    input.focus();
    return;
  }

  if (isTooShort(nombre)) {
    alert('El nombre debe tener al menos 2 caracteres.');
    input.focus();
    return;
  }

  if (isDuplicate(nombre, amigos)) {
    alert('Ese nombre ya está en la lista.');
    input.value = '';
    input.focus();
    return;
  }

  const nombreCapitalizado = capitalizeName(nombre);
  amigos.push(nombreCapitalizado);
  input.value = '';
  renderLista();
}

window.agregarAmigo = agregarAmigo;

function renderLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

window.renderLista = renderLista;

function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];
  resultado.innerHTML = `<li>¡El amigo secreto es: ${ganador}!</li>`;
}

window.sortearAmigo = sortearAmigo;

const inputEl = document.getElementById('amigo');
if (inputEl) {
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') agregarAmigo();
  });
}

renderLista();