$(function() {
    let $min = $(`#min`);
    let $sec = $(`#sec`);
    let $mil = $(`#mil`);
    let $start = $(`#start`);
    let $stop = $(`#stop`);
    let $pause = $(`#pause`)
    let $lap = $(`#lap`);
    let $output = $(`#output`);
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;
    let miliInterval;
    let secInterval;
    let check;
    let checkTwo;
    let reckCH = true;
    let isRunning = true;


    // function startMili(){
    //     miliInterval = setInterval(() => {
    //         //console.log($miliseconds);
    //         miliseconds++;
    //         $mil.text(miliseconds);
    //     }, 10);
    // }

    function startSec(){
        secInterval = setInterval(() => {
            seconds++;
            $sec.text(seconds);
        }, 1000);
    }

    function lapPause(){
        
    }
    function pauseWatch(){
        clearInterval(miliInterval);
        clearInterval(secInterval);
        clearInterval(check);
        clearInterval(checkTwo);
    }
    function startWatch(){
        if(isRunning == true){
        $(output).empty();
        miliInterval = setInterval(() => {
            //console.log($miliseconds);
            miliseconds++;
            $mil.text(miliseconds);
            if(miliseconds == 100){
                miliseconds = 0;
                $mil.text(miliseconds);
                seconds++;
                $sec.text(seconds);
            }
        }, 10);
        isRunning = false;
    } else if (isRunning == false){
        pauseWatch();
        isRunning = true;
    } else {
        console.log(`error`)
    }
    }

    function stopWatch(){
        minutes = 00;
        seconds = 00;
        miliseconds = 00;
        $mil.text(`00`);
        $sec.text(`00`);
        $min.text(`00`);
        clearInterval(miliInterval);
        clearInterval(secInterval);
        clearInterval(check);
    }

    function lap(){
        if(isRunning == false){
        let outputText = `${minutes}:${seconds}:${miliseconds} <br />`;
        console.log(outputText);
        $(output).append(outputText)
        } else if (isRunning == true){
            minutes = 00;
            seconds = 00;
            miliseconds = 00;
            $mil.text(`00`);
            $sec.text(`00`);
            $min.text(`00`);
            $(output).empty();
        }
    }

    $start
        .on("click", startWatch);
    $stop
        .on("click", stopWatch);
    $lap
        .on("click", lap);
    $pause
        .on("click", pauseWatch);

});
