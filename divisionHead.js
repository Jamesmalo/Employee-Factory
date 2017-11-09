const random = require('./random.js');

const divisionHead = function(){

    let id = "d-"+random().digit(8);
    let managers = random().discreteRangeIn(1,10);
    let workers = random().discreteRangeIn(20,300);
    let baseSalary = random().discreteRangeIn(1,2)*100000;

    function payDivisionHead(){
        let yearly = baseSalary;
        yearly += workers*50/Math.log(50*workers);
        yearly += managers*10000/Math.log(10000*managers);

        let weekly = 52/yearly;
        let daily = 5/weekly;

        let payDHead = [daily,weekly,yearly];
        return payDHead;
    }
    return{id, managers, workers, baseSalary, payDivisionHead}

};

module.exports = divisionHead;
