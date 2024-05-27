document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('infoCheckbox');
    const mensaje = document.getElementById('mensaje');
  
    checkbox.addEventListener('click', function() {
      if (checkbox.checked) {
        mensaje.style.display = 'block';
      } else {
        mensaje.style.display = 'none';
      }
    });
  });