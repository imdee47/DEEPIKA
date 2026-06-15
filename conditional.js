var light = "white"

if(light=="green"){
    console.log("go!");
}
else if(light == "yellow"){
    console.log("wait!")
}
else {
    console.log("invalid light color");
}
console.log("out side if");




switch(days){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:     
        console.log("invalid days number");
        
}


// do while

let count = 6
do{
    console.log(count);
    count++;
}while(count <= 5)

    console.log("outside do..while");
    
