function calculateWindChill(temp, speed) {
    //var temp = parseFloat(document.getElementById("temp").textContent);
    //var speed = parseFloat(document.getElementById("speed").textContent);
    if (temp > 50 || speed < 3) {
        return "N/A";
    }
    var result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    result = Math.round(result * 100) / 100; // round to 2 decimal places
    return result;
}

let temp = 32;
let speed = 5;

let windChill = calculateWindChill(temp, speed);
let windChillResult = document.getElementById("windChill");
windChillResult.textContent = windChill;
