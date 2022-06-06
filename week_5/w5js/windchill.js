// calculating windchill

const temp = parseInt(document.querySelector("#wednum").textContent) ;
const windspeed = parseInt(document.querySelector("#wedspeed").textContent);
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

console.log(chill);
document.querySelector("#wedchill").textContent = chill;