let tempInput=document.getElementById('tempInput');
let unitInput=document.getElementById('unitSelect');
let convertto = document.getElementById('convertto');
let result=document.getElementById('result');
let convertBtn=document.getElementById('convertBtn');

convertBtn.addEventListener("click", convertTemperature);
function convertTemperature(){
    let temperature = parseFloat(tempInput.value);
       if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    let fromUnit = unitInput.value;
    let toUnit = convertto.value;
    let convertedTemp;
    if(fromUnit === toUnit){
        convertedTemp = temperature;
    }
     else if(fromUnit === "Celsius" && toUnit === "Fahrenheit"){
        convertedTemp = (temperature * 9/5) + 32;
     }else if(fromUnit === "Celsius" && toUnit === "Kelvin"){
        convertedTemp = temperature + 273.15;
     }else if(fromUnit === "Fahrenheit" && toUnit === "Celsius"){
        convertedTemp = (temperature - 32) * 5/9;
     }else if(fromUnit === "Fahrenheit" && toUnit === "Kelvin"){
        convertedTemp = (temperature - 32) * 5/9 + 273.15;
     }else if(fromUnit === "Kelvin" && toUnit === "Celsius"){
        convertedTemp = temperature - 273.15;
     }else if(fromUnit === "Kelvin" && toUnit === "Fahrenheit"){
        convertedTemp = (temperature - 273.15) * 9/5 + 32;
     }  
    result.textContent = tempInput.value + " " + unitInput.value + " is " + convertedTemp + " " + convertto.value;
}
addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }   });