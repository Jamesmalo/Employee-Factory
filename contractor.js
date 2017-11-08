const random = require('./random.js');

const contractor = function(){

    let id = "c-"+random().digit(8);
    let startDate = "YYYY/MM/DD"
    let endDate = "YYYY/MM/DD"

    function pay(){
        let paid = random().discreteRangeIn(500,9000);
        return paid;
    }
};

module.exports = contractor;
