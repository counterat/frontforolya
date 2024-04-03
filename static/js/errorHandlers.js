
socket.on('error', function(data){
           
    var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-error', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = `${data.message}`;
    sky.appendChild(notification);

});

socket.on('not_enough_funds_on_the_balance', function(data){
   currentBet = null;
   var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-warning', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = `${data.message}`;
    sky.appendChild(notification);


});