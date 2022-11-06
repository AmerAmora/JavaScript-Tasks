let month= prompt("please enter the month");
month=parseInt(month);

switch (month) {
  case 1:
    month = "Jan";
    break;
  case 2:
    month = "Fab";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
    case 6:
    month = "Jun";
    break;
  case 7:
    month = "July";
    break;
  case  8:
    month = "Aug";
    break;
    case  9:
    month = "Sep";
    break;
    case  10:
    month = "Oct";
    break;
    case  11:
    month = "Nov";
    break;
    case  12:
    month = "Dec";
    break;
    default: month = "Invalid month";

}
document.write(month);