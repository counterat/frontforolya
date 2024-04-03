// Перебираем каждую кнопку и добавляем обработчики событий
buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        // При нажатии на кнопку уменьшаем ее размер
        button.style.transform = 'scale(0.9)';
    });

    button.addEventListener('mouseup', function() {
        // При отпускании кнопки возвращаем ее к исходному размеру
        button.style.transform = 'scale(1)';
    });
});

function topUpBalanceClicked(){
    amount_in_rub = parseFloat(prompt('Укажите сумму на которую вы хотите пополнить баланс'))

    socket.emit("topUpBalance", {user_id : user_id, amount : amount_in_rub})

}

function maxPossibleBet(){
   
    
    if (selectedBalanceObject.baltype == 'bonus'){
        betAmount.value = parseFloat(bonusBalanceElement.innerHTML);
                }
                else{
    betAmount.value = parseFloat(balanceElement.innerHTML);}
}

function toggleMenu(){
    var closeBtn = document.querySelector('.closeBtn');
    var closeBtnText = document.querySelector('#closeBtnText');
    closeBtn.classList.toggle('closeBtnCollapse')
    faketable.classList.toggle('collapsed')
    faketable.classList.toggle('faketable')
    
    if  (closeBtnText.classList == 'fas fa-arrow-right'){
  
    
        closeBtn.innerHTML = '<i class="fas fa-arrow-left" id="closeBtnText"></i> Закрыть';
        
    }
    else{
        closeBtn.innerHTML = '<i class="fas fa-arrow-right" id="closeBtnText"></i>';
    }
   
}


function depositBalanceIsMain(){
    selectedBalanceObject.baltype ='deposit'
    selectedBalance.innerHTML = balanceElement.innerHTML;
    
}
function bonusBalanceIsMain(){
   
    selectedBalanceObject.baltype = 'bonus'
    selectedBalance.innerHTML = bonusBalanceElement.innerHTML;
}
function hideNotifications(){
    var notifications = document.querySelectorAll('.notification');

// Добавляем слушатель событий для клика к каждому элементу
notifications.forEach(function(notification) {
    notification.addEventListener('click', function() {
        this.style.display = 'none'; // Скрыть элемент при клике
    });
});
}
setInterval(hideNotifications, 1000);

function terminateNotifications(){
    // Находим все элементы с классом notification
var notifications = document.querySelectorAll('.notification');

// Проходимся по каждому элементу
notifications.forEach(function(notification) {
    notification.style.opacity = 0;
    notification.addEventListener('transitionend', function(){
        notification.remove();

    }) // Через 2 секунды (2000 миллисекунд)
});

}
setInterval(terminateNotifications, 1000)



  // Для каждого инпута добавляем обработчик события keypress
  inputs.forEach(function(input) {
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        input.blur();
      }
    });
  });