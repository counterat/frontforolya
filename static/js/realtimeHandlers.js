var isSlidingVeryFast = false;
        socket.on("current_game", function(newData) {
			/* for (k=0; k<=300; k++){
				сhart.data.labels.push(numbers[k])
				chart.data.datasets[0].data.push(values[k])
			} */
            currentMultiplierElement.innerHTML = newData.current_multiplier.toFixed(2)+'x';
			currentMultiplier = newData.current_multiplier.toFixed(2)+'x';
            if (newData['fake_bet'])
            {
                try{
                var id_of_bet = (newData['fake_bet']);
                var fake_bet =document.querySelector(`.bet${id_of_bet}`);
                fake_bet.innerHTML=currentMultiplier;
		}
	    	catch(error){}
	    }
          
            if (newData.current_multiplier.toFixed(2) < 2 && !isSliding){
            isSliding = true;
            slidingLeftBottom()
            if (frog.classList != ['fly-from-button']){
		frog.classList.add('fly-from-button');
	    }
            }

            else if (newData.current_multiplier.toFixed(2) > 10 && !isSlidingVeryFast) {
                isSlidingVeryFast = true;
                slidingVeryFastLeftBottom()
                if (!( 'fast-fly-from-button' in frog.classList)){
                frog.classList.add('fast-fly-from-button');
            }
            }

            else if (( newData.current_multiplier.toFixed(2) > 2 )&& (!isSlidingFast)){
                
                isSlidingFast = true;
                
            slidingFastLeftBottom()

            if (!( 'fast-fly-from-button' in frog.classList)){

frog.classList.remove('fly-from-button');

frog.classList.add('fast-fly-from-button');
            }
            }
            

	   
            gameInProgress = true;
            containerForProgress.style.display = 'none'
            if (!currentBet){
                make_bet_button.innerHTML =  '<span style="font-weight: 700; font-size: 26px;">...</span>';
           
            }
            
			if (newData.fake_bets){
			
				for (const key in newData.fake_bets){
            
					var userName_and_avatar = newData.fake_bets[key]
                    for (const userName in userName_and_avatar){
						faketable.innerHTML += `<button class="btn  fakeusers" style=" align-items: center; background-color: rgba(255, 255, 255, 0.1); border: none; font-family: 'Roboto'; border-radius: 47px; color: white; text-align: center;">
                            <img src="${userName_and_avatar[userName]}" style="width: 25px; margin-right: 10px; border-radius:30px" alt="">
                            <div style="text-align: left;overflow: auto;  -webkit-overflow-scrolling: touch;">
                              <span style="font-weight: 300; font-size: 8px; ">${userName}</span><br>
                              <span style="font-weight: 400; font-size: 12px; ">${key} ${selectedCurrency}</span>
                            </div>
                          </button>`
                    }}
				
			}
            
            
            if (currentBet && autoWithdrawalCoeff){
            
                
             
                
                if (parseFloat(currentMultiplier) > parseFloat(autoWithdrawalCoeff).toFixed(2))
           
                    pickUpWInning()
            }
           
            

        });

        socket.on("time_remaining", function (data){
            make_bet_button.onclick = makeBet;
            
            if ( 'fast-fly-from-button' in frog.classList){
                    frog.classList.remove('fast-fly-from-button');
                }
                if (frog.classList != ['fly-top-right']){
                frog.classList.add('fly-top-right');
            }
                if (!currentBet){
                    make_bet_button.style.background = 'linear-gradient(180deg, #cf090f 0%, #fd4b27 100%, #fd4b27 100%)';
                make_bet_button.style.border = '2px solid #cde2f2';
                make_bet_button.innerHTML =  '<span style=" font-weight: 700; font-size: 26px;">СТАВКА</span>';
                }
                make_bet_button.onclick = makeBet;
                gameInProgress = false;
                var secondsToUpcomingGame = data.seconds;
                forGame = data.for_game;
    
                
                progressBarOfGame.style.width = `${data.seconds_remained*1.667}%`;
                containerForProgress.style.display = 'flex'
            
                currentMultiplierElement.innerHTML = '';
                if (data.fake_bets){
                    data = data.fake_bets
    
    data.forEach(bet => {
    
        for (const username in bet){
            console.log(bet)
            var avatarUrl = bet[username]['avatar_url']
         
            var randomNumber = bet[username]['price'];
            console.log(faketable)
            faketable.innerHTML += `<button class="btn  fakeusers" >
                         <img src="${bet[username]['avatar_url']}"  class="img-fakeusers"  alt="">
                         <div class="cont-fakeusers" >
                           <span style="font-weight: 300; font-size: 8px; ">${bet[username]['username']}</span><br>
                           <span style="font-weight: 400; font-size: 12px; ">${bet[username]['price']} ${selectedCurrency}</span>
                         </div>
                         <div  class="btn btn-primary coeff bet${bet[username]['id']}"></div>
                       </button>`
        }
    });
                }
            });


    socket.on("startgame", function(data){
            frog.classList.remove('fly-top-right');
            frog.classList.remove('fast-fly-from-button');
            frog.classList.add('fly-from-button')
        
    
            if (currentBet){
              
            make_bet_button.onclick = pickUpWInning
            make_bet_button.innerHTML =  '<span style="b font-weight: 700;  font-size: 26px;">ЗАБРАТЬ</span>';
            
          
        }
            else{
                make_bet_button.innerHTML =  '<span style=" font-weight: 700; font-size: 26px;">...</span>';
           
            }

            containerForProgress.style.display = 'none'
    currentMultiplierElement.innerHTML = '';
    currentMultiplier = 0;
    currentGame = data.game_id;
    gameInProgress = true;
    if (currentBet){

        if (currentBet.round_id !=currentGame){
        currentBet = null
    }
    }
    
 
   

});

