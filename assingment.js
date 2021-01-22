function kilometerToMeter(kilometer) {
    meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(4);
console.log(result);


function budgetCalculator(watch, phone, tv) {
    watchAmount = watch * 50;
    phoneAmount = phone * 100;
    tvAmount = tv * 150;
    total = watchAmount + phoneAmount + tvAmount;
    return total;
}
var result = budgetCalculator(5, 3, 2);
console.log(result);


function hotelCost(day) {
    var day;
    if (day <= 10) {
        first10Day = day * 100
        totalCost = first10Day;
    }
    else if (day <= 20) {
        first10Day = 10 * 100;
        var element = day - 10;
        var second10Day = element * 80;
        var totalCost = first10Day + second10Day;
    }
    else {
        first10Day = 10 * 100;
        second10Day = 10 * 80;
        element = day - 20;
        var anyDay = element * 50;
        totalCost = first10Day + second10Day + anyDay;
    }
    return totalCost;
}
var sumOfCost = hotelCost(30);
console.log(sumOfCost);


function megaFriend(Name) {
    var max = Name[0];
    for (i = 0; i < Name.length; i++) {
        var element = Name[i];
        if (element.length > max.length) {
            max = element;
        }
    } return max;
}
Name = ['zahid', 'emon', 'bikrom', 'joy'];
var result = megaFriend(Name);
console.log(result);