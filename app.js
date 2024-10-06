
// 1.

// var date = new Date();
// console.log(date);


// 2.


// var date = new Date();

// var monthName = [
//    "January", 
//    "February", 
//    "March",
//     "April", 
//     "May", 
//     "June",
//     "July", 
//     "August",
//     "September", 
//     "October",
//     "November",
//     "December"

// ];
// var currentMonth = monthName[date.getMonth()]

// alert("Cureent Month: " + currentMonth)

// 3.

// var date = new Date();

// console.log("Today is " + date.toString().slice(0,3));


// 4.

// var date = new Date();

// var day = date.getDay();

// if (day === 0 || day === 6){

//     console.log("It's Fun day");

// }
//  else{
//   console.log("It's a regular day");
// }



// 5.

// var date = new Date();  
// var dayOfMonth = date.getDate();  

// if (dayOfMonth < 16) {

//   console.log("First fifteen days of the month");
// }

// else {

//   console.log("Last days of the month");
// }

// 6.

// var currentDate = new Date();
// console.log("Current Date: " + currentDate);

// var milliseconds = currentDate.getTime();
// console.log("Milliseconds since Jan. 1, 1970: " + milliseconds);


// var minutes = (currentDate.getTime() / 1000 / 60); 
// console.log("Elapsed minutes since Jan. 1, 1970: " + minutes);


// 7.


// var date = new Date();

// var hours = date.getHours();

// if(hours < 12) {
//     alert("Its AM" );

// } else {
//       alert("Its PM" );

// }


// 8.

// var lastMonthLastDay = new Date(2021, 0, 1);

// var laterDate = new Date(lastMonthLastDay.getTime() - (24 * 60 * 60 * 1000));

// console.log("Later Date: " + laterDate);


// 9.


// var ramadanStart = new Date(2015 ,5 ,18);

// var currentDate = new Date();

// var differenceInMilliseconds = currentDate - ramadanStart;

// var daysSinceRamadan = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

// alert("Days since 1st Ramadan (June 18, 2015): " + daysSinceRamadan);


// 10.


// var refrenceDate = new Date(2015,11,5);

// var startOf2015 = new Date(2015,0,1);

// var differenceInMilliseconds = refrenceDate - startOf2015 ;


// var seconds = (differenceInMilliseconds * 1000);


// console.log("Seconds elapsed between the reference date and the beginning of 2015: " + seconds);


// 11.


// var currentDate = new Date();

// var currentHours = currentDate.getHours();

// console.log("Current Hours: " + currentHours); 

// currentDate.setHours(currentHours + 1);

// console.log("Updated Date and Time (one hour ahead): " + currentDate);


// 12.


// var currentDate = new Date;

// var currentYear = currentDate.getFullYear();

// var newYear = currentYear - 100;

// currentDate.setFullYear(newYear);

// alert("The date 100 years ago was: " + currentDate);


// 13.

// var userAge = +prompt("Enter your Age");

// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - userAge;

// alert("Your birth year is: " + birthYear);


// 14.


// var customerName = "Ali";

// var currentMonth = "October";

// var numberOfUnits = 410;

// var chargesPerUnit = 16;

// var latePaymentSurcharge = 350;

// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// var grossAmountPayable = +(netAmountPayable) + latePaymentSurcharge.toFixed(2); 



// document.write("<h1>K-Electric Bill</h1>");
// document.write("<b>Customer Name:</b> " + customerName + "<br>");
// document.write("<b>Month:</b> " + currentMonth + "<br>");
// document.write("<b>Number of Units:</b> " + numberOfUnits + "<br>");
// document.write("<b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "<br>");
// document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "<br>");













// console.log(currentMonth)

// console.log(numberOfunits)

// console.log(chargesPerunit)