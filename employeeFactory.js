const worker = require('./worker.js');
const manager = require('./manager.js');
const divisionHead = require('./divisionHead.js');
const contractor = require('./contractor.js');


const employeeFactory = function(){

    function create(type){
        if(type == "worker"){
            return worker();
        }
        else if(type == "manager"){
            return manager();
        }
        else if(type == "divisionHead"){
            return divisionHead();
        }
        else if(type == "contractor"){
            return contractor();
        }
        else{
            console.log("Please declare a type of employee");
        }
    }
    return{create}

};

module.exports = employeeFactory;
