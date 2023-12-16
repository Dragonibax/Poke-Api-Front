// client.js

document.addEventListener("DOMContentLoaded", function () {
  renderLoginForm();
});

function toggleForm() {
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');

  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

function renderLoginForm() {
  var content = document.getElementById('content');
  content.innerHTML = `
    <form id="loginForm">
      <h2>Login</h2>
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required>
      <button type="button" onclick="login()">Iniciar sesión</button>
      <div class="switch-form">
        ¿No tienes una cuenta? <a href="#" onclick="toggleForm()">Registrarse</a>
      </div>
    </form>

    <form id="registerForm" style="display: none;">
      <h2>Registro</h2>
      <label for="newUsername">Nuevo usuario:</label>
      <input type="text" id="newUsername" name="newUsername" required>
      <label for="newPassword">Nueva contraseña:</label>
      <input type="password" id="newPassword" name="newPassword" required>
      <button type="button" onclick="register()">Registrarse</button>
      <div class="switch-form">
        ¿Ya tienes una cuenta? <a href="#" onclick="toggleForm()">Iniciar sesión</a>
      </div>
    </form>
  `;
}


function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('http://localhost:3306/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario si el inicio de sesión es exitoso
      if (data.success) {
        alert('Inicio de sesión exitoso');
        // Redirigir o realizar otras acciones después del inicio de sesión exitoso
      } else {
        alert('Inicio de sesión fallido: ' + data.message);
      }
    })
    .catch(error => console.error('Error:', error));
}

function register() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  fetch('http://localhost:3306/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: newUsername, password: newPassword }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
      if (data.success) {
        alert('Registro exitoso');
        // Realizar acciones después del registro exitoso
      } else {
        alert('Registro fallido: ' + data.message);
      }
    })
    .catch(error => console.error('Error:', error));
}
