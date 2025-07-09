
function openPopup() {
  document.getElementById('login-popup').style.display = 'block';
}
function closePopup() {
  document.getElementById('login-popup').style.display = 'none';
}
function submitFrom() {
  document.getElementById('login-popup').style.display = 'none'
}

function submitFrom() {
  
  const email    = document.querySelector('.input0').value.trim();
  const login    = document.querySelector('.input1').value.trim();
  const password = document.querySelector('.input2').value.trim();

  
  if (email && login && password) {
    
    document.getElementById('login-popup').style.display = 'none';

    
    const message = document.getElementById('successMessage');

    
    message.textContent = '✅ Вы успешно зарегистрированы!';

    // Показываем сообщение
    message.classList.remove('hidden');
    message.classList.add('show');

    // Через 3 секунды убираем сообщение
    setTimeout(() => {
      message.classList.remove('show');
      message.classList.add('hidden');
    }, 3000);

  } else {
    alert('Пожалуйста, заполните все поля!');
  }
}

   












