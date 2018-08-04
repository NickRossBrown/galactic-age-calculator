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

    monthToDays(month){
    let i = month
    let totalDays = 0
    while (i > 0) {
      totalDays=+totalDays
      i-=1
    }
    return totalDays
  }

  daysInMonth (month) {
    let date = new Date(1990, month, 0).getDate();
    return date
   }

   daysToHours(days){
     days = days * 24
     return days
   }

   hoursToSec(hours){
   hours = hours * 60
   return hours
   }



}
