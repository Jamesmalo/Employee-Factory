const random = require('./random.js');

const contractor = function(){

    let id = "c-"+random().digit(8);
    let startDate = random().digit(4)+"/"+random().digit(2)+"/"+random().digit(2);
    let endDate = random().digit(4)+"/"+random().digit(2)+"/"+random().digit(2);

    function pay(){
        let paid = random().discreteRangeIn(500,9000);
        return paid;
    }
    return{id, startDate,endDate,pay}
};

module.exports = contractor;
