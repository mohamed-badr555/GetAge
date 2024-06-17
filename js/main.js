let input = document.querySelector('input');
let button = document.querySelector('button');
let message = document.querySelector('.message');


button.addEventListener('click', function () {
    if (input.value == null || input.value == "") {
        message.innerHTML = "You Must Set Your BirthDate";
    }
    else {
        let BD = new Date(input.value);
        let DBYear = BD.getFullYear();
        let DBMonth = BD.getMonth();
        let DBDay = BD.getDate();
        let CurrentBD = new Date();
        let CDBYear = CurrentBD.getFullYear();
        let CDBMonth = CurrentBD.getMonth();
        let CDBDay = CurrentBD.getDate();
        
        let YearAge, MonthAge, DayAge;
        //GetYear
        YearAge = CDBYear - DBYear;


        //GetMonth
        if (CDBMonth >= DBMonth) {
            MonthAge = CDBMonth - DBMonth;
        } else {
            YearAge--;
            MonthAge = 12 + CDBMonth - DBMonth;
        }
        //GetMonth 
        if (CDBDay >= DBDay) {
            DayAge = CDBDay - DBDay;

        } else {
            MonthAge--;
            DayAge = 31 + CDBDay - DBDay;
        }
        if (MonthAge < 0) {
            YearAge--;
            MonthAge = 11;
        }
   

        if (YearAge < 7) {
            message.innerHTML = "Your Age Must be Greater Than 6 Years old";
        } else 
        {
            message.innerHTML = `You are ${YearAge} Years, ${MonthAge} Months and ${DayAge} days old`;
        }


    }


});



