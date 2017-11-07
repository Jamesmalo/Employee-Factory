const random = require('./random.js');

const worker = function(){

    let id = "w-"+random().digit(8);
    let wage = random().discreteRangeIn(8,50);
    let hours = random().discreteRangeIn(4,7)*5;

    function pay(){
        let daily = 5/weekly;
        let weekly = wage*hours;
        let yearly = 52*weekly;

        let payWorker = [daily,weekly,yearly]
        return payWorker;
    }

};

module.exports = worker;
