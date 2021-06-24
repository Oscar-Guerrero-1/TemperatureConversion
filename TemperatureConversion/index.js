

function convertToCelcius(temperature){

    return (temperature - 32) * 5/9;
}

var cities = ["Albany",  "Caribou",  "Columbia", "Denver",
     "Indianapolis", "Montgomery", "SanDiego", "Tulsa",
     "Tampa", "Billings"];

let fahrenheit = [22.2, 9.5, 44.6, 29.2, 26.5, 46.6, 57.8, 36.4, 61.3, 24.0]; 

var celcius = [];

for(var i = 0; i < fahrenheit.length; i++){
    celcius[i] = convertToCelcius(fahrenheit[i]);
}

console.log(celcius);

// Cold - less than 20    Moderate - Between 20 and 30      Hot - Above 30
for(var count = 0; i < cities.length; count++){
    if(celcius[count] < 20){
        console.log("Cold:" + "\n" + celcius[count] + " in " + cities[count]);
        
    }
    else if(celcius[count] < 30 && celcius[count] > 20){
        console.log("Moderate:" + "\n"  + celcius[count] + " in " + cities[count]);
        
    }else if (celcius[count] > 30){
        console.log("Hot:" + "\n"  + celcius[count] + " in " + cities[count]);
    }
    
}

