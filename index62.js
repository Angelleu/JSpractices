let monthNumber=15;
let monthDays=null;
let monthName =null;
switch(monthNumber){
    case 1:
        monthName ='January';
        monthDays ='31days';
        break;
        case 2:
        monthName ='February';
        monthDays ='29days in leap years';
        break;
        case 3:
            monthName ='March';
        monthDays ='31days';
        break;
        case 4:
            monthName ='April';
        monthDays ='30days';
        break;
        case 5:
            monthName ='May';
        monthDays ='31days';
        break;
        case 6:
            monthName ='June';
        monthDays ='30days';
        break;
        case 7:
            monthName ='July';
        monthDays ='31days';
        break;
        case 8:
            monthName ='August';
        monthDays ='31days';
        break;
        case 9:
            monthName ='September';
        monthDays ='30days';
        break;
        case 10:
            monthName ='October';
        monthDays ='31days';
        break;
        case 11:
            monthName ='November';
        monthDays ='30days';
        break;
        case 12:
            monthName ='December';
        monthDays ='31days';
        break;
        default:
            monthName ='It is not';
        monthDays ='error monthdays';
}
console.log(`${monthName} is the selected month and has ${monthDays}`);