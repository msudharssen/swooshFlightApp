const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { DateTime } = require('luxon');

async function flightInformation (data){
    // Get current UTC time, day, and month with format "year, month, day"
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get human-readable month and padding with '0'
    let day = currentDate.getDate().toString().padStart(2, '0'); // Padding with '0'
    let d2 = currentDate.getDate() + 1;
    let day2 = d2.toString().padStart(2, '0');
    
    let utcFormattedDate = `${year}-${month}-${day}`;
    let utcFormattedDate2 = `${year}-${month}-${day2}`
    
    
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

    console.log(result);

    // let index = 0;

    // for(let i=0; i<result.flights.length; i++){
    //     if(result.flights[i].status=='En Route / On Time'){
    //         index = i
    //         break;
    //     }
    //     else if(result.flights[i].status=='Arrived / Gate Arrival'){
    //         index = i
    //         break;
    //     }
    // }
        
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
    info.push(result.flights[2].origin.code_iata);
    info.push(result.flights[2].origin.name);
    info.push(result.flights[2].origin.city);
    info.push(result.flights[2].destination.code_iata);
    info.push(result.flights[2].destination.name);
    info.push(result.flights[2].destination.city);
    info.push(result.flights[2].status);
    info.push(dateTakeOff);
    info.push(dateLand);
    info.push(convertedTimeOff);
    info.push(convertedTimeOn);
    info.push(result.flights[2].ident_iata);
    info.push(result.flights[2].progress_percent);
    info.push(result.flights[2].origin.timezone);
    info.push(result.flights[2].destination.timezone);
    console.log("1,2,3,4,5")
    return info;
}
catch(error){
    console.log(error);
}
}

function converToStandardTime(time24) {
    let timeParts = time24.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);
  
    let period = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    hours = hours ? hours : 12; // "0" should be "12"
  
    let time12 = hours.toString().padStart(2, "0") + ":" +
                 minutes.toString().padStart(2, "0") + ":" +
                 seconds.toString().padStart(2, "0") + " " + period;
  
    return time12;
}

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.D_PASS,
    database: 'swoosh',
}).promise();

async function register(user, pass){
    let hashed = await bcrypt.hash(pass, saltRounds);
    let result = await pool.query("Select * FROM userinfo WHERE username = (?)", [user]);
    if (result && result[0] && result[0].length === 0 && hashed!=='') {
    let insertQuerry = await pool.query("INSERT INTO userinfo VALUES (?, ?)", [user, hashed]);
    console.log(insertQuerry);
    console.log("Registration Completed");
    return 1;
    }
    else{
        console.log("Username Already Exists");
        return 2; 
    }
}

async function login(userName, passW){
    let userInformation = '';
    let isMatch = false;
    await pool.query(`Select * FROM userinfo WHERE username = '${userName}';`).then(res =>{
        userInformation = res[0];
    }).catch(err =>{
        console.log(err);
    });

    if(userInformation.length > 0){
        isMatch = await bcrypt.compare(passW, userInformation[0].password);
    }
    return isMatch;
}

function generateBigSecret(){
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()?><';
    let toBeSentOut = '';

    for(let i=0; i<1000; i++){
        let charOfInterest = 1000 % (chars.length);
        toBeSentOut.concat(chars[charOfInterest]);
    }

    return toBeSentOut;
}



module.exports = {flightInformation, register, login, generateBigSecret};



