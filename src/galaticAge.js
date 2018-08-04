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

   yearsToSec(years){
   years = years * 31557600
   return years
   }

   mercuryYears(years) {
     return years * .24
   }

   venusYears(years) {
     return years * .62
   }

   marsYears(years) {
     return years * 1.88
   }

   jupitorYears(years) {
     return years * 11.86
   }

   maleLifeExpectancy(age) {
     let lifeExp = 0
     let slope = 0
     if (age >0 && age < 30) {
       slope = 0.043666666666667
       lifeExp = 76.5
       let x = age - 0
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(2)
     } else if (age >= 30 && age < 60) {
       slope = 0.10766666666667
       lifeExp = 77.81
       let x = age - 30
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(2)
     } else if (age >= 60 && age < 65) {
       slope  =	0.228
       lifeExp = 81.04
       let x = age - 60
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(2)
     } else if (age >= 65 && age < 70) {
       slope  =	0.3
       lifeExp = 82.18
       let x = age - 65
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(4)
     } else if (age >= 70 && age < 100) {
       slope  =	0.61066666666667
       lifeExp = 83.68
       let x = age - 70
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(2)
     } else if ( age  >= 100) {
       slope  =	0.61066666666667
       lifeExp = 102
       let x = age - 100
       x = x * slope
       let y2 = x+lifeExp
       return y2.toFixed(2)
     }
   }

   overAverageLifeSpan(age){
     if (age > 76.5){
       return age - 76.5
     } else return false
   }





}
