const random = require('./random.js');

const manager = function(){

    let id = "m-"+random().digit(8);
    let workers = random().discreteRangeIn(4,20);
    let baseSalary = random().discreteRangeIn(4,9)*10000;

    function payManager(){
        let yearly = baseSalary;

        if(workers < 10){
            yearly += numberWorkers*250;
        }
        else if(workers > 10){
            yearly += numberWorkers*400
        }

        let weekly = 52/yearly;
        let daily = 5/weekly;


        let payManager = [daily,weekly,yearly];
        return payManager;
    }
    return{id, workers, baseSalary, payManager}
};

module.exports = manager;
