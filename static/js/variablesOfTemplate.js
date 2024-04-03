var buttons = document.querySelectorAll('button');

var notificationContainer = document.querySelector('#notificationContainer');
var faketable = document.querySelector('.faketable');
var isAuthorized = false;
var frog = document.querySelector('#frog');

console.log(frog)
var fakeBets;
var used_childs = [];

var selectedCurrency = '$';
var socket = io.connect(`${window.location.protocol}//${window.location.hostname}:${window.location.port}`);
var balance = parseFloat(document.querySelector('#depositBalance'))
var balanceElement = document.querySelector('#depositBalance')
var gameInProgressElement = document.querySelector('#gameInProgress');
var make_bet_button = document.querySelector('#make_bet_button');
var currentMultiplier = 0;
var currentMultiplierElement = document.querySelector('#currentMultiplier')
var currentBet;

var forGame;
var user_id;
var currentGame;
var upcomingGame;
var selectedBalance = document.querySelector('#selected-balance');
var selectedBalanceObject = {
    baltype: 'deposit'
    
}
var bonusBalanceElement = document.querySelector('#bonusBalance');
var betAmount = document.querySelector('#betAmount')
var progressBarOfGame = document.querySelector('#progressBarOfGame')
var containerForProgress = document.querySelector('#container-for-progress')
var container_for_btns = document.querySelector('.container-for-btns')
var colForCoefs = document.querySelector('#col-for-coefs')
var autoWithdrawal = document.querySelector('#auto-withdrawal');
var autoWithdrawalCoeff;
var autoWithdrawalCoeffInput = document.querySelector('#coeff')
var invitation_code = document.querySelector('#invitationCode').value;
var dropdownBtn = document.querySelector('#dropdownBtn');



var inputs = document.querySelectorAll("input");
if (gameInProgressElement.getAttribute('value') == "True"){
    gameInProgress = true;

}
else {
    gameInProgress = false;
};
