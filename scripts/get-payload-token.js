// Script para obtener token de usuario de Payload
// Ejecuta esto en tu consola del navegador en el dashboard de Payload

// 1. Abre las DevTools (F12)
// 2. Ve a la pestaña "Application" o "Storage"
// 3. Busca en "Local Storage" o "Session Storage"
// 4. Busca algo como "payload-token" o similar

// O puedes hacer login programáticamente:
async function getPayloadToken() {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'tu-email@ejemplo.com',
      password: 'tu-password'
    })
  });
  
  const data = await response.json();
  console.log('Token:', data.token);
  return data.token;
}

// getPayloadToken();