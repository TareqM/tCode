var friends = {
    bill: {
    firstName: "Bill",
    lastName: "Johns",
    number: "(415) 543-5678",
    address: ['432 Brodrick Way','Venice','CA','92043'],
    },
    
    steve: {
    firstName: "Steve",
    lastName: "Smith",
    number: "(415) 543-5678",
    address: ['5432 Jameson Way','Sacramento','CA','91025'],
    },
};

var list = function(friends){
    for(var find in friends){
        console.log(find);
        find++;
    }
};

var search = function(name){
    for(var byFirst in friends){
        if(friends[byFirst].firstName === name){
            console.log(friends[byFirst]);
            return(friends[byFirst]);
        }
    }
};