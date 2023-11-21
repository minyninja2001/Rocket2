var timer = null;
var countdownNumber = 10;


var ChangeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

 
    if (state == 2){
        timer = setInterval(function() {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            if (countdownNumber  <= 0) {
                ChangeState(3)
            }

            if (countdownNumber == 6) {

                document.getElementById('nervous').className = 'nervous show'
            } else {

                document.getElementById('nervous').className = 'nervous'
            }

            if (countdownNumber == 4) {
                document.getElementById('cant-wait').className = 'cant-wait show'

            } else {
                document.getElementById('cant-wait').className = 'cant-wait'
            }
        }, 800);
        
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('random Number: ' + randomNumber);

            if (randomNumber > 5){
                ChangeState(4);

                // WEll done DUDE for sound remember these two
                var sound1 = document.getElementById('ALIVE');
                sound1.play();
            } else {
                ChangeState(5)
                var sound2 = new Audio('We Are Doomed SID.mp3'); 
                sound2.play();
            }


        }, 1000);

    }









}




