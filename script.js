document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'check.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById('message').textContent = xhr.responseText;
      } else {
        document.getElementById('message').textContent = 'Ошибка при отправке формы.';
      }
    };
    xhr.send(formData);
  });
  