let day = 1;

switch(day){
    case 4:
        console.log("Wednesday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong Value");            
}

let browser = "FIREFOX".toLowerCase();

switch (browser) {
    case "chrome":
        console.log("Executing tc on Chrome");
        break;
    case "edge":
        console.log("Executing tc on Edge");
        break;
    case "firefox":
        console.log("Executing tc on Firefox");
        break;
    default:
        console.log("Invalid browser");        
        break;
}