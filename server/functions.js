const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { DateTime } = require('luxon');

async function flightInformation (data){
    // Get current UTC time, day, and month with format "year, month, day"
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    let day = currentDate.getDate().toString().padStart(2, '0'); 
    
    let utcFormattedDate = `${year}-${month}-${day}`;
    
    
    try{
    let url = `https://aeroapi.flightaware.com/aeroapi/flights/${data}?start=${utcFormattedDate}`;
    let options = {
    method: 'GET',
    headers: {
        'x-apikey': process.env.API_KEY
    }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    let temp = result.flights.length;
    console.log(result);

        
    let utcTimeString = result.flights[0].estimated_off;
    let utcTime = DateTime.fromISO(utcTimeString, { zone: 'utc'});
    let localTimeOff = utcTime.setZone(`${result.flights[2].origin.timezone}`);
    
    let utcTimeString2 = result.flights[0].estimated_on;
    let utcTime2 = DateTime.fromISO(utcTimeString2, { zone: 'utc'});
    let localTimeOn = utcTime2.setZone(`${result.flights[2].destination.timezone}`);

    let dateTakeOff = localTimeOff.toISO().split('T')[0];
    let dateLand = localTimeOn.toISO().split('T')[0];

    let timeTakeOff = localTimeOff.toISO().split('T')[1].split('.')[0];
    let convertedTimeOff = converToStandardTime(timeTakeOff);
    let timeLand = localTimeOn.toISO().split('T')[1].split('.')[0];
    let convertedTimeOn = converToStandardTime(timeLand);


    
    let info = [];
    info.push(result.flights[temp-1].origin.code_iata);
    info.push(result.flights[temp-1].origin.name);
    info.push(result.flights[temp-1].origin.city);
    info.push(result.flights[temp-1].destination.code_iata);
    info.push(result.flights[temp-1].destination.name);
    info.push(result.flights[temp-1].destination.city);
    info.push(result.flights[temp-1].status);
    info.push(dateTakeOff);
    info.push(dateLand);
    info.push(convertedTimeOff);
    info.push(convertedTimeOn);
    info.push(result.flights[temp-1].ident_iata);
    info.push(result.flights[temp-1].progress_percent);
    info.push(result.flights[temp-1].origin.timezone);
    info.push(result.flights[temp-1].destination.timezone);
    return info;
}
catch(error){
    console.log(error);
}
}

function converToStandardTime(time24) {
    let timeParts = time24.split(":");
    let hrs = parseInt(timeParts[0]);
    let mins = parseInt(timeParts[1]);
    let secs = parseInt(timeParts[2]);
  
    let period = hrs >= 12 ? "PM" : "AM";
  
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
  
    let time12 = hrs.toString().padStart(2, "0") + ":" +
                 mins.toString().padStart(2, "0") + ":" +
                 secs.toString().padStart(2, "0") + " " + period;
  
    return time12;
}





module.exports = {flightInformation};



