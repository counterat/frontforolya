socket.on('connect', function(data) {
    var WebApp = window.Telegram.WebApp; 
   /*  WebApp.initDataUnsafe.user.first_name  */
/*      WebApp.initDataUnsafe.user.id; */
var tgusername =  document.querySelector('#ipAdress').value ; 
   var ipAdress = document.querySelector('#ipAdress').value; 
WebApp.expand();


   var xhr = new XMLHttpRequest();

// Указываем метод и URL для запроса
xhr.open("POST", "/authorize", true);

// Устанавливаем заголовок Content-Type для передачи данных в формате JSON
xhr.setRequestHeader("Content-Type", "application/json");

// Определяем функцию, которая будет вызвана при завершении запроса
xhr.onreadystatechange = function () {
if (xhr.readyState === XMLHttpRequest.DONE) {

var data = JSON.parse(xhr.response);

isAuthorized = true;
   user_id = data.user['id'];
   selectedCurrency = data.user.selected_currency;
   balanceElement.innerHTML =  (data.user.deposit_balance).toFixed(2) + ` ${selectedCurrency}`;
   bonusBalanceElement.innerHTML = (data.user.bonus_balance).toFixed(2) + ` ${selectedCurrency}`;
   if (selectedBalanceObject.baltype == 'deposit'){
   selectedBalance.innerHTML = (data.user.deposit_balance).toFixed(2) + ` ${selectedCurrency}`;	
   
   }
   else{
       selectedBalance.innerHTML = (data.user.bonus_balance).toFixed(2) + ` ${selectedCurrency}`;
   }
   
   
}
};

// Создаем объект с данными для отправки на сервер
var messageData = {
       id: ipAdress,
       tgusername : tgusername,
       invitation_code:invitation_code,
   };


// Преобразуем объект с данными в формат JSON
var jsonData = JSON.stringify(messageData);

// Отправляем запрос на сервер с данными
xhr.send(jsonData);



  

get_bets()
get_previous_xes()
});


