const saveButton = document.getElementById('save-button');
const stockLevelInput = document.getElementById('stock-level');
const alertMessage = document.getElementById('alert-message');
const productNameAlert = document.getElementById('product-name-alert');

// Importar la función sendEmail desde el archivo send-email.js
const sendEmail = require('./send-email').sendEmail;

saveButton.addEventListener('click', () => {
  const stockLevel = parseInt(stockLevelInput.value);
  const productName = document.getElementById('product-name').value;

  if (stockLevel < 10) {
    alertMessage.classList.remove('hidden');
    productNameAlert.textContent = productName;

    // Enviar un correo electrónico de alerta de stock
    const to = 'destinatario@ejemplo.com'; // Reemplazar con la dirección de correo electrónico del administrador
    const subject = 'Alerta de Stock';
    const text = `El stock del producto ${productName} está por debajo del mínimo establecido. Por favor, reponerlo.`;
    sendEmail(to, subject, text);
  } else {
    alertMessage.classList.add('hidden');
  }
});

