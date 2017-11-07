const random = require('./random.js');

const manager = function(){

    let id = "m-"+random().digit(8);
    let workers = random().discreteRangeIn(4,20);
    let baseSalary = random().discreteRangeIn(4,9)*10000;

    function payManager(){
        let daily = 5/weekly;
        let weekly = wage*hours;
        let yearly = 52*weekly;

        let payManager = [];
        return payManager;
    }
};

module.exports = manager;
