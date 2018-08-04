export class GalaticAge {

  constructor(name, month, day, year, planet) {
    this.name = name
    this.day = day
    this.month = month
    this.year = year
    this.planet = planet
    this.todayDate = new Date();
  }
    //
//want to add default values to constucter

  // function defaults (def){
  //     this.def = {name:"defaultName",
  //     day:99,
  //     month:99,
  //     year:999,
  //     planet:"earth"
  //   };
  // };


   yearsToDays(years){
     years = years * 365
     return years
   }

   daysInMonth (month) {
     let date = new Date(1990, month, 0).getDate();
     return date
    }

    monthsToDays(month){
    let i = month
    let totalDays = 0
    while (i > 0) {
      let days= 0
      days = new Date(1990, i, 0).getDate();
      totalDays = totalDays + days
      i-=1
    }
    return totalDays;
  }

   daysToHours(days){
     days = days * 24
     return days
   }

   hoursToSec(hours){
   hours = hours * 60 * 60
   return hours
   }



}
