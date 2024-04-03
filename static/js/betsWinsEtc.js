socket.on("you_got_new_winning", function(data){
            

            
    var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-success', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = `Вы выиграли ${data.amount.toFixed(2)} $`;
    sky.appendChild(notification);
  
    if (data.baltype == 'deposit'){
    balanceElement.innerHTML = `${(data.user.deposit_balance).toFixed(2)} $`;
    if (selectedBalanceObject.baltype == 'deposit'){
    selectedBalance.innerHTML = balanceElement.innerHTML;}

    }
    else{
        bonusBalanceElement.innerHTML = `${(data.user.bonus_balance).toFixed(2)} $`
        if (selectedBalanceObject.baltype == 'bonus'){
            selectedBalance.innerHTML = bonusBalanceElement.innerHTML;
        }
    }
    
    make_bet_button.onclick =  makeBet;
    currentBet = null;
});

function pickUpWInning(){
    autoWithdrawalCoeff = null;
    if (!isAuthorized){
        var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-error', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = `Вы не зарегистрированы`;
     return sky.appendChild(notification);

    }
    if (!currentMultiplier){
        var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-blue', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = `Дождитесь начала игры`;
    return sky.appendChild(notification);

    }
    if (currentBet){

    
    socket.emit("pickupwinning", {bet : currentBet.id})
    currentBet = null;
    }}

    socket.on("crash", function(data){
        isSliding = false;
        isSlidingFast = false;
    isSlidingVeryFast = false;
    
        make_bet_button.style.background = 'linear-gradient(180deg, #cf090f 0%, #fd4b27 100%, #fd4b27 100%)';
        make_bet_button.style.border = '2px solid #cde2f2';
autoWithdrawalCoeff = null;
        used_childs = [];
        faketable.innerHTML = '';
        frog.classList.remove('fly-from-button')
        if (( 'fast-fly-from-button' in frog.classList)){
            frog.classList.remove('fast-fly-from-button');
        }
        frog.classList.add('fly-top-right');

        slidingLeft()
        var childs = colForCoefs.querySelectorAll('.coeff_lose, .coeff_big_win,  .coeff_win');
        if (childs.length >= 20){
            childs[childs.length-1].remove()
        }
        
        if (parseFloat(currentMultiplier) <1.05){

            colForCoefs.innerHTML =` <div class="coeff_lose" >
            <span>${currentMultiplier}</span>
        </div>${colForCoefs.innerHTML}`
        
        }
        else if (parseFloat(currentMultiplier) >= 2){

            colForCoefs.innerHTML = `<div class="coeff_big_win" >
            <span>${currentMultiplier}</span>
        </div>${colForCoefs.innerHTML}`
        }
        else{
      
            colForCoefs.innerHTML =   `<div class="coeff_win" >
            <span>${currentMultiplier}</span>   
        </div>${colForCoefs.innerHTML}`
        }
        /* try{
        if (currentBet.round_id == currentGame){
            if (data.user.id == user_id){
                var notification = document.createElement('div');
        notification.classList.add('alert', 'notification-error', 'notification');
        notification.setAttribute('role', 'alert'); 
        notification.textContent = `Вы проиграли ${data.amount} F`
        sky.appendChild(notification);

        
            balanceElement.innerHTML =( data.user.deposit_balance).toFixed(2) + ' F'
            bonusBalanceElement.innerHTML = data.user.bonus_balance.toFixed(2) +' F'
        }
            if (selectedBalanceObject.baltype == 'deposit'){
            selectedBalance.innerHTML = balanceElement.innerHTML;}
            else{
                selectedBalance.innerHTML = bonusBalanceElement.innerHTML;
            }
            currentBet = null;
        }}catch (error){} */
            
    })


    socket.on("successful_bet",function(data){
        currentBet = data;
        var notification = document.createElement('div');
        notification.classList.add('alert', 'notification-blue', 'notification');
        notification.setAttribute('role', 'alert'); 
        notification.textContent ="Вы успешно поставили ставку";
console.log('stavka')
        sky.appendChild(notification);
        console.log(notification)
        if (data.baltype == 'deposit'){
        balanceElement.innerHTML = `${(parseFloat(balanceElement.innerHTML) - data.price).toFixed(2)}  ${selectedCurrency}` ;
            if (selectedBalanceObject.baltype == 'deposit'){
        selectedBalance.innerHTML = balanceElement.innerHTML;}}
        else {
            
            bonusBalanceElement.innerHTML = `${(parseFloat(bonusBalanceElement.innerHTML)-data.price).toFixed(2)} ${selectedCurrency}`;
            if (selectedBalanceObject.baltype == 'bonus'){
                

                selectedBalance.innerHTML = bonusBalanceElement.innerHTML;
  
            }
        }

        
        make_bet_button.style.background = '#99c5ff';
        make_bet_button.style.border = '2px solid #6cabfb';
        make_bet_button.innerHTML =  '<span style="font-weight: 700; font-size: 26px;">...</span>';
    });


    
function makeBet(){

    if (!isAuthorized){
        var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-error', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = "Вы не зареганы!"
    return sky.appendChild(notification);

      
    }

    if (gameInProgress){
        var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-warning', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = "Вы не можете ставить ставки во время игры!"
    return sky.appendChild(notification);

        
    }
    if (!betAmount.value){
        var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-blue', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent = "Введите сумму ставки"
    return sky.appendChild(notification);

        
    }
    if (!gameInProgress && isAuthorized && forGame){
        if (currentBet){
            var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-error', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent ="Вы уже поставили ставку в этой игре!"
    return sky.appendChild(notification);

        
            
        }
     
        
        if (autoWithdrawal.checked){
            if (autoWithdrawalCoeffInput.value){
                if ((parseFloat(autoWithdrawalCoeffInput.value) < 1.1)){
                   
                    var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-warning', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent ="Минимальный коеффициент для автовывода - 1.1"
    return sky.appendChild(notification);

                }
                autoWithdrawalCoeff = parseFloat( autoWithdrawalCoeffInput.value) 
        

            }
            else{   
                var notification = document.createElement('div');
    notification.classList.add('alert', 'notification-warning', 'notification');
    notification.setAttribute('role', 'alert'); 
    notification.textContent ="Введите коэффициент для вывода!"
    return sky.appendChild(notification);
            }
        }

        socket.emit("new_bet", {"user_id":user_id, game_id:forGame,  bet_in_usd:parseFloat(betAmount.value), baltype:selectedBalanceObject.baltype})
    }

};


socket.on("crashed_bet", function(data){
    try{
            if (currentBet.round_id == currentGame){
                if (data.user.id == user_id){
                	var notification = document.createElement('div');
            notification.classList.add('alert', 'notification-error', 'notification');
            notification.setAttribute('role', 'alert'); 
            notification.textContent = `Вы проиграли ${data.amount}  ${selectedCurrency}`
			sky.appendChild(notification);

            
				balanceElement.innerHTML =( data.user.deposit_balance).toFixed(2) + ` ${selectedCurrency}`
                bonusBalanceElement.innerHTML = data.user.bonus_balance.toFixed(2) +` ${selectedCurrency}`
            }
                if (selectedBalanceObject.baltype == 'deposit'){
                selectedBalance.innerHTML = balanceElement.innerHTML;}
                else{
                    selectedBalance.innerHTML = bonusBalanceElement.innerHTML;
                }
                currentBet = null;
			}}catch (error){}


})