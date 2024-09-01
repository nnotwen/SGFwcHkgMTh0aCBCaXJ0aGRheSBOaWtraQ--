$(document).ready(function(){
    const DateTime = luxon.DateTime;

    // Countdown timer
    const DayFromNow = DateTime.fromObject({
        year: 2024, month: 9, day: 15,
    }).setZone('Asia/Manila').startOf('day').plus({
        hour: 17,
    }).toJSDate();

    const toDayFromNow = (DayFromNow.getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
    
    // Set Up FlipDown
    var flipdown = new FlipDown(toDayFromNow).start().ifEnded(() => {
        $('#countdown-custom-header').html("We're currently celebrating!")
    });
});