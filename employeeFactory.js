const worker = require('./worker.js');
const manager = require('./manager.js');
const divisionHead = require('./divisionHead.js');
const contractor = require('./contractor.js');


const employeeFactory = function(){

    function create(type){
        if(type == "worker"){
            return 
        }
        else if(type == "manager"){
            return
        }
        else if(type == "divisionHead"){
            return
        }
        else if(type == "contractor"){
            return
        }
        else{
            console.log("Please declare a type of employee");
        }
    }

};

module.exports = employeeFactory;
