



       
       
     

     




        

       
       

            
        
      
       /*  function generate_widget_for_payment(data){
			var confirmation_token = data.confirmation_token

			var parentElement = document.getElementById("parent-container");
			// Удаляем переменную checkout, если она существует


			var scriptElement = document.createElement("script");
			var scriptElement2 = document.createElement("script");

		

// Создаем текст скрипта

// Устанавливаем атрибут src для этого элемента
			scriptElement.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";

// Устанавливаем id для этого элемента
			
	
			//container_for_payment.appendChild(scriptElement);
			var scriptText = `
			if (window.checkout) {
				delete window.checkout;;
}
// Инициализация виджета. Все параметры обязательные.
const checkout = new window.YooMoneyCheckoutWidget({
    confirmation_token: '${confirmation_token}', //Токен, который перед проведением оплаты нужно получить от ЮKassa
    return_url: 'https://example.com/', //Ссылка на страницу завершения оплаты, это может быть любая ваша страница
    customization: {
        //Настройка способа отображения
        modal: true
    },
	error_callback: function(error) {
        console.log(error);
    }
});

// Отображение платежной формы в контейнере
checkout.render('payment-form');
`;

// Устанавливаем содержимое скрипта
			scriptElement2.innerHTML = scriptText;
			parentElement.appendChild(scriptElement)
			parentElement.appendChild(scriptElement2)

			


		} */

		/* socket.on("generate_widget_for_payment", function(data) {
    
            var overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.id = "overlay";
var widgetContainer = document.createElement("div");
widgetContainer.classList.add("widgetContainer");
widgetContainer.onclick = function(event) {
    event.stopPropagation();
};
            var closeButton = document.createElement("button");
closeButton.classList.add("close-btn");
closeButton.textContent = "✖";
closeButton.onclick = closeWidget;

// Создаем iframe
var iframe = document.createElement("iframe");
iframe.src = data['url'];
iframe.height = "100%";
iframe.width = "100%";

// Добавляем кнопку закрытия в контейнер
widgetContainer.appendChild(closeButton);

// Добавляем iframe в контейнер
widgetContainer.appendChild(iframe);

// Добавляем контейнер в overlay
overlay.appendChild(widgetContainer);

// Добавляем overlay в body
document.body.appendChild(overlay);
console.log(overlay)
});


 */
      
    


  

	    
