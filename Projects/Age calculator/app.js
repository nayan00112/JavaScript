let Birthin = document.querySelector("#birth input");
let Todayin = document.querySelector("#today input");
let calculate = document.querySelector(".container button");
let display = document.querySelector(".display p");

calculate.addEventListener("click", () => {
    let birthDate = new Date(Birthin.value);
    let todayDate = new Date(Todayin.value);

    let timeDiff = todayDate.getTime() - birthDate.getTime(); //milisecond

    let second = timeDiff / 1000; //second
    let minute = second / 60; //minute
    let hour = minute / 60; //Hour
    let day = hour / 24; //days
    let week = Math.floor(day / 7); // weeks
    let month2 = Math.ceil(timeDiff/(1000*60*60*24*30.5)); //month
    // let year = Math.ceil(month/12);  //year

    let yearinDecimal = timeDiff / (1000 * 60 * 60 * 24 * 30.5 * 12);
    let remainmonth = (yearinDecimal % 1);
    let year = Math.floor(yearinDecimal);   //year
    let month = Math.floor(remainmonth *12);     //year month

    // under maintainance
    let remainDays = remainmonth % 1;
    let dayintear = (remainDays * 30.5);
    console.log(dayintear);

    if (year > 0) {
        display.innerText = "Age: \n\n"   +  year +  "year " +  month +  "month \n" + "or " +  month2 +  "month \n" + "or " +  week +  "weeks \n" + "or " +  day +  "day \n" + "or " +  hour +  "hour \n" + "or " +  minute +  "minutes \n" + "or " +  second +  "seconds";
    } else if (month > 0) {
        display.innerText = "Age:  \n\n" +  month2 +  "month\n" + "or " +  week +  "weeks \n" + "or " +  day +  "day \n" + "or " +  hour +  "hour \n" + "or " +  minute +  "minutes \n" + "or " +  second +  "seconds";
    } else if (week > 0) {
        display.innerText = "Age : \n\n" +  week +  "weeks \n" + "or " +  day +  "day \n" + "or " +  hour +  "hour \n" + "or " + minute +  "minutes \n" + "or " +  second + "seconds";
    } else if (day > 0) {
        display = "Age : \n\n " +  day +  "day \n" + "or " +  hour +  "hour \n" + "or " +  minute +  "minutes \n" +  "or " +  second +  "seconds";
    } else if (hour > 0) {
        display.innerText = "Age : \n\n" +  hour +  "hour \n" + "or " +  minute +  "minutes\n" + "or " +  second +  "seconds";
    } else if (minute > 0) {
        display.innerText = "Age : \n\n" +  minute +  "minutes \n" + "or " +  second +  "seconds";
    } else if (second > 0) {
        display.innerText = "Age : \n\n" + second + "seconds";
    } else {
        display.innerText = "INVALID DATE";
    }
});