  // Cargar usuarios desde localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Verificar credenciales
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
          alert('Inicio de sesión exitoso.');
          window.location.href = 'metaV.html'; // Redirigir a metaV.html
      } else {
          alert('Correo electrónico o contraseña incorrectos.');
      }
  });

  document.getElementById('registerLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('formTitle').innerText = 'Registro';
      document.getElementById('loginForm').innerHTML = `
          <input type="email" id="registerEmail" placeholder="Correo electrónico" required>
          <input type="password" id="registerPassword" placeholder="Contraseña" required>
          <button type="submit" id="registerButton">Registrar</button>
      `;
  });

  document.addEventListener('click', function(event) {
      if (event.target.id === 'registerButton') {
          event.preventDefault();
          const email = document.getElementById('registerEmail').value;
          const password = document.getElementById('registerPassword').value;

          // Validar campos
          if (!email || !password) {
              alert('Por favor, completa todos los campos.');
              return;
          }

          // Verificar si el usuario ya existe
          if (users.some(user => user.email === email)) {
              alert('El correo electrónico ya está registrado.');
              return;
          }

          // Agregar nuevo usuario
          users.push({ email, password });
          localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage
          alert('Registro exitoso. Ahora puedes iniciar sesión.');

          // Volver al formulario de inicio de sesión
          document.getElementById('formTitle').innerText = 'Petworld';
          document.getElementById('loginForm').innerHTML = `
              <input type="email" id="loginEmail" placeholder="Correo electrónico" required>
              <input type="password" id="loginPassword" placeholder="Contraseña" required>
              <button type="submit">Iniciar sesión</button>
          `;
      }
  });
  document.getElementById('registerLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('formTitle').innerText = 'Registro';
      document.getElementById('loginForm').innerHTML = `
          <input type="email" id="registerEmail" placeholder="Correo electrónico" required>
          <input type="password" id="registerPassword" placeholder="Contraseña" required>
          <button type="submit" id="registerButton">Registrar</button>
      `;
      document.getElementById('registerLink').style.display = 'none';
  });