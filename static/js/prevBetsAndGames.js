function get_previous_xes(){
    var xhr = new XMLHttpRequest();

// Указываем метод и URL для запроса
xhr.open("GET", "/get_previous_xes", true);

// Устанавливаем заголовок Content-Type для передачи данных в формате JSON
xhr.setRequestHeader("Content-Type", "application/json");

// Определяем функцию, которая будет вызвана при завершении запроса
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    var data = JSON.parse(xhr.response);
    var previous_xes = data.data.reverse()
    previous_xes.forEach(element => {
        if (parseFloat(element) <1.05){

colForCoefs.innerHTML =` <div class="coeff_lose" >
<span>${parseFloat( element)+'x'}</span>
</div>${colForCoefs.innerHTML}`

}
else if (parseFloat(element) >= 2){

colForCoefs.innerHTML = `<div class="coeff_big_win" >
<span>${parseFloat(parseFloat( element)+'x')}</span>
</div>${colForCoefs.innerHTML}`
}
else{

colForCoefs.innerHTML =   `<div class="coeff_win" style="border-radius: 47px;
background-color: #ffffff;  display: flex; justify-content: center; align-items: center; height: 5vh;
border: 3px solid #65a7fb; color: #65a7fb;text-align: center; width: 18%; font-weight: 500; flex: 0 0 20%;">
<span>${parseFloat( element)+'x'}</span>   
</div>${colForCoefs.innerHTML}`
}
    });


  }

}
xhr.send();
}


function get_bets(){

    var xhr = new XMLHttpRequest();

// Указываем метод и URL для запроса
xhr.open("GET", "/get_bets", true);

// Устанавливаем заголовок Content-Type для передачи данных в формате JSON
xhr.setRequestHeader("Content-Type", "application/json");

// Определяем функцию, которая будет вызвана при завершении запроса
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    
    var newData = JSON.parse(xhr.response);

    if (newData['bets']){
        console.log(newData)
             
             newData['bets'].forEach(bet => {

                 if (bet['was_grabbed_at_multiplier']){
             faketable.innerHTML += `<button class="btn  fakeusers" >
                     <img src="${bet['avatar_url']}" class="img-fakeusers"  alt="">
                     <div class="cont-fakeusers" >
                       <span style="font-weight: 300; font-size: 8px; ">${bet['username']}</span><br>
                       <span style="font-weight: 400; font-size: 12px; ">${bet['price']} ${selectedCurrency}</span>
                     </div>
                     <div  class="btn btn-primary coeff bet${bet['id']}" >${bet['was_grabbed_at_multiplier']}x</div>
                   </button>`
                 }
                 else{
                     faketable.innerHTML += `<button class="btn  fakeusers" >
                     <img src="${bet['avatar_url']}"  class="img-fakeusers"  alt="">
                     <div class="cont-fakeusers">
                       <span style="font-weight: 300; font-size: 8px; ">${bet['username']}</span><br>
                       <span style="font-weight: 400; font-size: 12px; ">${bet['price']} ${selectedCurrency}</span>
                     </div>
                     <div  class="btn btn-primary coeff bet${bet['id']}"></div>
                   </button>`
                 }

             });
     }
			
  }
};

// Создаем объект с данными для отправки на сервер

// Отправляем запрос на сервер с данными
xhr.send();
        

}
