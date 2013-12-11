var user = prompt("Where are you going?").toUpperCase();

switch(user) {
    case 'STORE':
        var liquor = prompt("liquor store?").toUpperCase();
        var grocery = prompt("Will you get me tomatoes?").toUpperCase();
        if(liquor === 'YES' || grocery === 'YES'){
         console.log("it's down the street to the left");   
        } else {
            console.log("hope you know your way");
        }
        break;
    case 'BATHROOM':
        var one = prompt("#1?").toUpperCase();
        var two = prompt("#2?").toUpperCase();
        if(one === 'YES' && two === 'YES'){
            console.log("make it quick");
        } else {
            console.log("I need to go next");
        }
        break;
    case'KITCHEN':
        var cooking = prompt("will you be cooking?").toUpperCase();
        var drinks = prompt("getting a drink?").toUpperCase();
        if(cooking === 'YES' || drinks === 'YES'){
            console.log("include me in!");
        } else {
            console.log("will you get me a beer anyway");
        }
        break;
        
    default:
    console.log("let me know how it is!");
}